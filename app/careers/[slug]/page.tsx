"use client";

import { notFound } from "next/navigation"
import { useJobs, Job, ResponsibilityGroup } from "@/hooks/useJobs"
import ParallaxBackground from "@/components/ParallaxBackground"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { MapPin, Briefcase, Clock, ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import styles from "@/styles/JobDescription.module.css"

export default function JobDescriptionPage({ params }: { params: { slug: string } }) {
  const { jobs, loading } = useJobs()
  
  if (loading) {
    return (
      <>
        <Navbar />
        <div className={styles.loadingContainer}>
          <p>Loading job details...</p>
        </div>
      </>
    )
  }

  const job = jobs.find(j => j.slug === params.slug)

  if (!job) {
    return notFound()
  }

  // Type guard to check if responsibilities are grouped
  const isGroupedResponsibilities = (
    resps: string[] | ResponsibilityGroup[]
  ): resps is ResponsibilityGroup[] => {
    return resps.length > 0 && typeof resps[0] !== 'string'
  }

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <main className={styles.jdPage}>
        <div className="container">
          <Link href="/careers" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Careers
          </Link>

          <div className={styles.jdHeader}>
            <h1>{job.title}</h1>
            <div className={styles.metaRow}>
              {job.department && (
                <div className={styles.metaItem}>
                  <Briefcase size={16} />
                  <span>{job.department}</span>
                </div>
              )}
              {job.location && (
                <div className={styles.metaItem}>
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>
              )}
              {job.type && (
                <div className={styles.metaItem}>
                  <Clock size={16} />
                  <span>{job.type}</span>
                </div>
              )}
              {job.numberOfOpenings && (
                <div className={styles.metaItem}>
                  <span className={styles.openingsBadge}>
                    {job.numberOfOpenings} Opening{job.numberOfOpenings > 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>
            <div className={styles.applyTop}>
               {job.applicationUrl && job.isCurrentOpening ? (
                  <Link href={job.applicationUrl} target="_blank" rel="noopener noreferrer" className={styles.applyBtn}>
                    Apply Now <ArrowUpRight size={18} />
                  </Link>
                ) : (
                  <button className={styles.applyBtnDisabled} disabled>
                    Applications Closed
                  </button>
                )}
            </div>
          </div>

          <div className={styles.jdContent}>
            <section className={styles.jdSection}>
              <h2>About the Role</h2>
              <p className={styles.description}>{job.description}</p>
            </section>

            {job.responsibilities && job.responsibilities.length > 0 && (
              <section className={styles.jdSection}>
                <h2>Responsibilities</h2>
                {isGroupedResponsibilities(job.responsibilities) ? (
                  job.responsibilities.map((group, index) => (
                    <div key={index} className={styles.responsibilityGroup}>
                      {group.heading && <h3>{group.heading}</h3>}
                      <ul>
                        {group.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul>
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <section className={styles.jdSection}>
                <h2>Requirements</h2>
                <ul>
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {job.preferredSkills && job.preferredSkills.length > 0 && (
              <section className={styles.jdSection}>
                <h2>Preferred Skills</h2>
                <ul>
                  {job.preferredSkills.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {job.softSkills && job.softSkills.length > 0 && (
              <section className={styles.jdSection}>
                <h2>Soft Skills</h2>
                <ul>
                  {job.softSkills.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {job.additionalInfo && job.additionalInfo.length > 0 && (
              job.additionalInfo.map((info, idx) => (
                <section key={idx} className={styles.jdSection}>
                  <h2>{info.heading}</h2>
                  <ul>
                    {info.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))
            )}

            <div className={styles.applyBottom}>
              {job.applicationUrl && job.isCurrentOpening ? (
                <Link href={job.applicationUrl} target="_blank" rel="noopener noreferrer" className={styles.applyBtnLarge}>
                  Apply for this position <ArrowUpRight size={20} />
                </Link>
              ) : (
                <button className={styles.applyBtnLargeDisabled} disabled>
                  Applications Closed
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
