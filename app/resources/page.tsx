export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a href="/resources/blog" className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <p className="text-text-secondary">Read our latest articles and insights about space exploration.</p>
        </a>
        <a href="/resources/gallery" className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <p className="text-text-secondary">Explore our collection of space images and media.</p>
        </a>
        <a href="/resources/faq" className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <p className="text-text-secondary">Find answers to frequently asked questions about space exploration.</p>
        </a>
      </div>
    </div>
  )
} 