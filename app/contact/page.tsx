export default function ContactPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-card border border-border focus:border-primary outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-card border border-border focus:border-primary outline-none"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full p-3 rounded-lg bg-card border border-border focus:border-primary outline-none"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
} 