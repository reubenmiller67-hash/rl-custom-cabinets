import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../lib/firebase'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<{ title: string; content?: string; publishedAt?: { seconds: number } } | null>(null)
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
        if (snap.empty) {
          setNotFound(true)
          setPost(null)
        } else {
          const doc = snap.docs[0]
          setPost({
            title: doc.data().title || 'Untitled',
            content: doc.data().content,
            publishedAt: doc.data().publishedAt,
          })
        }
      } catch {
        setNotFound(true)
      } finally {
        setLoading(false)
      }
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
        {post.publishedAt && (
          <p className="mt-4 text-sm" style={{ color: '#6B6560' }}>
            {new Date(post.publishedAt.seconds * 1000).toLocaleDateString()}
          </p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert mt-10 max-w-none"
          style={{ color: '#A39E93' }}
        >
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p>No content yet.</p>
          )}
        </motion.div>
      </article>

      <section className="border-t px-4 py-12 md:px-6" style={{ borderColor: '#333333', backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-3xl text-center">
          <Link
            to="/quote"
            className="inline-block rounded-lg px-8 py-3.5 font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
