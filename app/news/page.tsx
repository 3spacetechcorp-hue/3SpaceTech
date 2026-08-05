export default function NewsPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* News items will be added here */}
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Space News Title</h2>
          <p className="text-text-secondary mb-4">Brief description of the news article...</p>
          <span className="text-sm text-text-secondary">May 9, 2024</span>
        </div>
      </div>
    </div>
  )
} 