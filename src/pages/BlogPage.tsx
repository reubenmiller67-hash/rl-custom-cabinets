import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../lib/firebase'

interface Post {
  id: string
  slug: string
  title: string
  excerpt?: string
  publishedAt?: { seconds: number }
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const q = query(collection(db, 'posts'), orderBy('publishedAt', 'desc'))
        const snap = await getDocs(q)
        const list = snap.docs.map((doc) => {
          const d = doc.data()
          return {
            id: doc.id,
            slug: d.slug || doc.id,
            title: d.title || 'Untitled',
            excerpt: d.excerpt,
            publishedAt: d.publishedAt,
          }
        })
        setPosts(list)
      } catch {
        setPosts([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-semibold md:text-5xl"
            style={{ color: '#F5F0E8' }}
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-lg"
            style={{ color: '#A39E93' }}
          >
            Tips, inspiration, and news from R&L Custom Cabinets
          </motion.p>

          {loading ? (
            <p className="mt-12" style={{ color: '#6B6560' }}>Loading...</p>
          ) : posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 rounded-lg border py-16 text-center"
              style={{ borderColor: '#333333', backgroundColor: '#1A1A1A' }}
            >
              <p className="text-lg" style={{ color: '#A39E93' }}>Coming Soon</p>
              <p className="mt-2 text-sm" style={{ color: '#6B6560' }}>
                We&apos;re preparing articles on design, maintenance, and project stories. Check back later.
              </p>
            </motion.div>
          ) : (
            <div className="mt-12 space-y-8">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block rounded-lg border p-6 transition-colors hover:border-[#C9A84C]"
                    style={{ backgroundColor: '#242424', borderColor: '#333333' }}
                  >
                    <h2 className="font-heading text-xl font-semibold" style={{ color: '#F5F0E8' }}>
                      {post.title}
                    </h2>
                    {post.publishedAt && (
                      <p className="mt-2 text-sm" style={{ color: '#6B6560' }}>
                        {new Date(post.publishedAt.seconds * 1000).toLocaleDateString()}
                      </p>
                    )}
                    {post.excerpt && (
                      <p className="mt-3 text-sm" style={{ color: '#A39E93' }}>{post.excerpt}</p>
                    )}
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t px-4 py-12 md:px-6" style={{ borderColor: '#333333', backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4" style={{ color: '#A39E93' }}>Ready to start your project?</p>
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
