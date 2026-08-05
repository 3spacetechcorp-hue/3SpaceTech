"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, Filter, X } from 'lucide-react';
import '../../styles/components/faqs.css'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FAQ {
  id: number;
  // year: string;
  title: string;
  question: string;
  answer: string;
  // difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

export default function FAQPage() {
  const [faqs] = useState<FAQ[]>([
    {
      id: 1,
      title: "3Space Tech Overview",
      question: "What does AnjaniSutah 3Space Tech do in the space technology sector?",
      answer: "3Space Tech develops reusable rockets and cost-effective launch solutions to make space exploration accessible, sustainable, and affordable, aiming to position India as a global leader in space innovation and deep-space travel.",
      category: "About Us"
    },
    {
      id: 2,
      title: "Our Products and Services",
      question: "What services and products does 3Space Tech offer?",
      answer: "We offer reusable rocket systems, cost-effective satellite launches, custom payload support, simulation-driven design, educational rocketry kits, and partnership-based engineering solutions tailored to commercial, research, and community needs.",
      category: "Products"
    },
    {
      id: 3,
      title: "Space Sector Challenges",
      question: "What challenges is 3Space addressing in the space sector?",
      answer: "3Space tackles high launch costs, limited small payload access, complex regulations, and lack of affordable providers. By offering reusable rockets and customer-centric solutions, they aim to make space more accessible, scalable, and reliable for global users.",
      category: "Challenges"
    },
    {
      id: 4,
      title: "Innovations",
      question: "What innovations set 3Space apart from others?",
      answer: "Key innovations include reusable first and second-stage rockets, cryogenic engines, active stabilization, and precision staging. These advancements enable lower costs, higher reliability, and efficient payload delivery, setting 3Space apart in India's growing private space sector.",
      category: "Innovation"
    },
    {
      id: 5,
      title: "Ongoing Missions",
      question: "Are we involved in any ongoing or upcoming space missions?",
      answer: "We are currently working on our Proof of Concept (PoC) rocket. The tentative launch date is 27th August as we continue testing and development to ensure mission success.",
      category: "Missions"
    },
    {
      id: 6,
      title: "Future Goals",
      question: "What are 3Space Tech's future goals?",
      answer: "3Space aims to cross the Karman Line in the first year, achieve sub-orbital launches by year two, and complete orbital reusable launches by year five—positioning themselves as leaders in India and Asia for vertical landing and satellite deployment.",
      category: "Vision"
    },
    {
      id: 7,
      title: "Collaboration Opportunities",
      question: "How can organizations collaborate with 3Space Tech?",
      answer: "Organizations can collaborate via payload launches, research partnerships, sponsorships, or joint tech development. We're open to alliances in simulation, engineering, and manufacturing to accelerate innovation together.",
      category: "Partnerships"
    },
    {
      id: 8,
      title: "Career Opportunities",
      question: "Are there internship or career opportunities at 3Space Tech?",
      answer: "We welcome interns and enthusiasts passionate about space. While not formally listed, opportunities may exist in rocketry, payload, design, and R&D—reach out to explore roles.",
      category: "Careers"
    },
    {
      id: 9,
      title: "Sustainability",
      question: "What is our approach to space sustainability and responsible innovation?",
      answer: "We prioritize reusability, minimize launch costs, and promote inclusive innovation through education and partnerships—ensuring sustainable growth in space exploration and community engagement.",
      category: "Sustainability"
    },
    {
      id: 10,
      title: "Contact Information",
      question: "How can I contact the 3Space Tech team?",
      answer: "You can contact us using the email addresses provided below, or simply fill out the contact form with your query—we’ll get back to you as soon as possible.",
      category: "Contact"
    }
  ]);

  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqs);
  const [searchTerm, setSearchTerm] = useState<string>('');
  // const [yearFilter, setYearFilter] = useState<string>('');
  // const [difficultyFilter, setDifficultyFilter] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    let filtered = faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      // const matchesYear = !yearFilter || faq.year === yearFilter;
      // const matchesDifficulty = !difficultyFilter || faq.difficulty === difficultyFilter;
      const matchesCategory = !categoryFilter || faq.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });

    setFilteredFAQs(filtered);
  }, [searchTerm, categoryFilter, faqs]);
  //yearFilter, difficultyFilter

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const clearFilters = () => {
    setSearchTerm('');
    // setYearFilter('');
    // setDifficultyFilter('');
    setCategoryFilter('');
  };

  const toggleFilterPopup = () => {
    setIsFilterPopupOpen(!isFilterPopupOpen);
  };

  // const uniqueYears = [...new Set(faqs.map(faq => faq.year))].sort().reverse();
  const uniqueCategories = [...new Set(faqs.map(faq => faq.category))].sort();

  return (
    <>
      <Navbar />
      <main>
        <div className="faqs-container">
          <header className="faqs-header">
            <h1>Frequently Asked Questions</h1>
            <p className="faqs-subtitle">Aerospace Engineering</p>
          </header>

          {/* <div className="search-section">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div> */}

          <div className="filters-section">
            <div className="filters-grid">
              {/* <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Years</option>
                {uniqueYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select> */}

              {/* <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Difficulties</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select> */}

              {/* <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Categories</option>
                {uniqueCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <button onClick={clearFilters} className="clear-filters-btn">
                <Filter size={18} />
                Clear Filters
              </button> */}
            </div>
          </div>

          <div className="stats-section">
            {/* <div className="stat-card">
              <span className="stat-number">{faqs.length}</span>
              <span className="stat-label">Total FAQs</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{filteredFAQs.length}</span>
              <span className="stat-label">Showing</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{expandedItems.size}</span>
              <span className="stat-label">Expanded</span>
            </div> */}
          </div>

          <div className="faqs-list">
            {filteredFAQs.length === 0 ? (
              <div className="no-results">
                <p>No FAQs match your search criteria.</p>
                <button onClick={clearFilters} className="clear-filters-btn">
                  Clear all filters
                </button>
              </div>
            ) : (
              filteredFAQs.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <div className="faq-header" onClick={() => toggleExpanded(faq.id)}>
                    <div className="faq-meta">
                      {/* <span className="year-badge">{faq.year}</span>
                      <span className={`difficulty-badge difficulty-${faq.difficulty.toLowerCase()}`}>
                        {faq.difficulty}
                      </span> */}
                      <span className="category-badge">{faq.category}</span>
                    </div>
                    <div className="faq-question-section">
                      <h3 className="faq-title">{faq.title}</h3>
                      <p className="faq-question">{faq.question}</p>
                    </div>
                    <button className="expand-btn">
                      {expandedItems.has(faq.id) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>
                  
                  {expandedItems.has(faq.id) && (
                    <div className="faq-answer">
                      <div className="answer-label">Answer</div>
                      <p className="answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Floating Filter Button */}
          <button 
            className="floating-filter-btn" 
            onClick={toggleFilterPopup}
            aria-label="Open filters"
          >
            <Filter size={20} />
          </button>

          {/* Filter Popup */}
          {isFilterPopupOpen && (
            <div className="filter-popup-overlay" onClick={toggleFilterPopup}>
              <div className="filter-popup" onClick={(e) => e.stopPropagation()}>
                <div className="filter-popup-header">
                  <h3>Filters</h3>
                  <button 
                    className="filter-popup-close"
                    onClick={toggleFilterPopup}
                    aria-label="Close filters"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="filter-popup-content">
                  <div className="filter-group">
                    <label htmlFor="popup-search">Search</label>
                    <div className="popup-search-box">
                      <Search className="popup-search-icon" size={16} />
                      <input
                        id="popup-search"
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="popup-search-input"
                      />
                    </div>
                  </div>

                  <div className="filter-group">
                    <label htmlFor="popup-category">Category</label>
                    <select
                      id="popup-category"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="filter-select"
                    >
                      <option value="">All Categories</option>
                      {uniqueCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="filter-popup-actions">
                    <button onClick={clearFilters} className="clear-filters-btn">
                      Clear Filters
                    </button>
                    <button onClick={toggleFilterPopup} className="apply-filters-btn">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}