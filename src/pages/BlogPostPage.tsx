import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { getBlogPostBySlug } from '../data/blogPosts'

interface PostData {
  title: string
  content?: string
  author?: string
  date?: string
  category?: string
  publishedAt?: { seconds: number }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<PostData | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) {
      setNotFound(true)
      setLoading(false)
      return
    }
    const load = async () => {
      try {
        const q = query(collection(db, 'posts'), where('slug', '==', slug))
        const snap = await getDocs(q)
        if (!snap.empty) {
          const doc = snap.docs[0]
          const d = doc.data()
          setPost({
            title: d.title || 'Untitled',
            content: d.content,
            author: d.author,
            date: d.publishedAt ? new Date(d.publishedAt.seconds * 1000).toISOString().slice(0, 10) : undefined,
            category: d.category,
            publishedAt: d.publishedAt,
          })
          setLoading(false)
          return
        }
      } catch {
        // fall through to local
      }
      const localPost = getBlogPostBySlug(slug)
      if (localPost) {
        setPost({
          title: localPost.title,
          content: localPost.content,
          author: localPost.author,
          date: localPost.date,
          category: localPost.category,
        })
      } else {
        setNotFound(true)
      }
      setLoading(false)
    }
    load()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-[60vh] px-4 py-24 text-center" style={{ backgroundColor: '#0D0D0D' }}>
        <p style={{ color: '#A39E93' }}>Loading...</p>
      </div>
    )
  }

  if (notFound || !post) {
    return (
      <div className="min-h-[60vh] px-4 py-24 text-center" style={{ backgroundColor: '#0D0D0D' }}>
        <h1 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
          Post not found
        </h1>
        <Link to="/blog" className="mt-4 inline-block font-medium" style={{ color: '#C9A84C' }}>
          ← Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm font-medium transition-colors hover:text-[#E2C873]"
          style={{ color: '#C9A84C' }}
        >
          ← Back to Blog
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 font-heading text-4xl font-semibold md:text-5xl"
          style={{ color: '#F5F0E8' }}
        >
          {post.title}
        </motion.h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm" style={{ color: '#6B6560' }}>
          {post.date && (
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          )}
          {post.author && (
            <>
              {post.date && <span>·</span>}
              <span>{post.author}</span>
            </>
          )}
          {post.category && (
            <>
              <span>·</span>
              <span style={{ color: '#C9A84C' }}>{post.category}</span>
            </>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert mt-10 max-w-none"
          style={{ color: '#A39E93' }}
        >
          {post.content ? (
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p>No content yet.</p>
          )}
        </motion.div>
      </article>

      <section className="border-t px-4 py-16 md:px-6" style={{ borderColor: '#333333', backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
            Ready to Start Your Project?
          </h2>
          <Link
            to="/quote"
            className="mt-6 inline-block rounded-lg px-8 py-3.5 font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
