import re

with open('app/contact/page.tsx', 'r') as f:
    content = f.read()

# 1. Imports
content = re.sub(
    r'<<<<<<< HEAD\nimport \{ motion \} from "framer-motion";\n=======\nimport \{ motion, AnimatePresence \} from "framer-motion";\n\n>>>>>>> e01e7fe.*?\n',
    'import { motion, AnimatePresence } from "framer-motion";\n',
    content
)

content = re.sub(
    r'<<<<<<< HEAD\n  FaWhatsapp ,\n=======\n  FaCircleCheck,\n  FaCircleExclamation,\n>>>>>>> e01e7fe.*?\n',
    '  FaWhatsapp ,\n  FaCircleCheck,\n  FaCircleExclamation,\n',
    content
)

# 2. State & Submit
content = re.sub(
    r'<<<<<<< HEAD\n=======\n  const \[toast, setToast\] = useState<\{ message: string; type: "success" \| "error" \} \| null>\(null\);\n\n  useEffect\(\(\) => \{\n    if \(toast\) \{\n      const timer = setTimeout\(\(\) => setToast\(null\), 5000\);\n      return \(\) => clearTimeout\(timer\);\n    \}\n  \}, \[toast\]\);\n>>>>>>> e01e7fe.*?\n',
    '  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);\n\n  useEffect(() => {\n    if (toast) {\n      const timer = setTimeout(() => setToast(null), 5000);\n      return () => clearTimeout(timer);\n    }\n  }, [toast]);\n',
    content
)

content = re.sub(
    r'<<<<<<< HEAD\n    setForm\(\(prev\) => \(\{ \.\.\.prev, \[name\]: value \}\)\);\n=======\n\n    setForm\(\(prev\) => \(\{\n      \.\.\.prev,\n      \[name\]: value,\n    \}\)\);\n>>>>>>> e01e7fe.*?\n',
    '    setForm((prev) => ({ ...prev, [name]: value }));\n',
    content
)

content = re.sub(
    r'<<<<<<< HEAD\n=======\n\n>>>>>>> e01e7fe.*?\n',
    '',
    content
)

# Replace the specific API block
api_block_conflict = r'<<<<<<< HEAD\n        const errorData = await response\.json\(\)\.catch\(\(\) => null\);\n        throw new Error\(errorData\?\.message \|\| \'Unable to send your message\. Please try again later\.\'\);\n      \}\n\n      const data = await response\.json\(\);\n      setStatus\(\'sent\'\);\n      setForm\(\{ name: \'\', email: \'\', organization: \'\', subject: \'\', message: \'\' \}\);\n      alert\(data\.message \|\| \'Message sent successfully\.\'\);\n    \} catch \(error\) \{\n      console\.error\(\'Contact form submit error:\', error\);\n      setStatus\(\'idle\'\);\n      alert\(error instanceof Error \? error\.message : \'There was a problem sending your message\.\'\);\n=======\n        if \(data\.errors\) \{\n          const errorMessages = Object\.values\(data\.errors\)\.flat\(\)\.join\(", "\);\n          setToast\(\{ message: `Validation failed: \$\{errorMessages\}`\, type: "error" \}\);\n        \} else \{\n          setToast\(\{ message: data\.message \|\| "Failed to submit inquiry", type: "error" \}\);\n        \}\n        setStatus\("idle"\);\n        return;\n      \}\n\n      setStatus\("sent"\);\n      setToast\(\{ message: data\.message \|\| "Your message was saved successfully\.", type: "success" \}\);\n\n      setForm\(\{\n        name: "",\n        email: "",\n        organization: "",\n        subject: "",\n        message: "",\n      \}\);\n    \} catch \(error: any\) \{\n      console\.error\("Contact form error:", error\);\n      setToast\(\{ message: error\.message \|\| "Something went wrong\.", type: "error" \}\);\n      setStatus\("idle"\);\n>>>>>>> e01e7fe.*?\n'

api_resolved = '''        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Unable to send your message. Please try again later.');
      }

      const data = await response.json();
      setStatus('sent');
      setForm({ name: '', email: '', organization: '', subject: '', message: '' });
      setToast({ message: data.message || 'Message sent successfully!', type: 'success' });
    } catch (error) {
      console.error('Contact form submit error:', error);
      setStatus('idle');
      setToast({ message: error instanceof Error ? error.message : 'There was a problem sending your message.', type: 'error' });
'''

content = re.sub(api_block_conflict, api_resolved, content)

# 3. Toast UI at the bottom
ui_block_conflict = r'<<<<<<< HEAD\n          </>\n=======\n\n      \{\/\* Toast Notification \*\/\}\n      <AnimatePresence>\n        \{toast && \(\n          <motion\.div\n            className=\{styles\.toastOverlay\}\n            initial=\{\{ opacity: 0 \}\}\n            animate=\{\{ opacity: 1 \}\}\n            exit=\{\{ opacity: 0 \}\}\n            onClick=\{\(\) => setToast\(null\)\}\n          >\n            <motion\.div\n              className=\{\`\$\{styles\.toastCard\} \$\{\n                toast\.type === "success"\n                  \? styles\.toastSuccess\n                  : styles\.toastError\n              \}\`\}\n              initial=\{\{ opacity: 0, scale: 0\.9, y: 20 \}\}\n              animate=\{\{ opacity: 1, scale: 1, y: 0 \}\}\n              exit=\{\{ opacity: 0, scale: 0\.9, y: 20 \}\}\n              transition=\{\{ type: "spring", damping: 25, stiffness: 300 \}\}\n              onClick=\{\(e\) => e\.stopPropagation\(\)\}\n            >\n              <span className=\{styles\.toastIconWrapper\}>\n                \{toast\.type === "success" \? \(\n                  <FaCircleCheck size=\{32\} \/>\n                \) : \(\n                  <FaCircleExclamation size=\{32\} \/>\n                \)\}\n              <\/span>\n              <h3 className=\{styles\.toastTitle\}>\n                \{toast\.type === "success"\n                  \? "Message Sent!"\n                  : "Something went wrong"\}\n              <\/h3>\n              <p className=\{styles\.toastMessage\}>\{toast\.message\}<\/p>\n              <button\n                className=\{styles\.toastBtn\}\n                onClick=\{\(\) => setToast\(null\)\}\n              >\n                OK\n              <\/button>\n            <\/motion\.div>\n          <\/motion\.div>\n        \)\}\n      <\/AnimatePresence>\n\n      <Footer \/>\n    <\/>\n>>>>>>> e01e7fe.*?\n'

ui_resolved = '''          {/* Toast Notification */}
          <AnimatePresence>
            {toast && (
              <motion.div
                className={styles.toastOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setToast(null)}
              >
                <motion.div
                  className={`${styles.toastCard} ${toast.type === "success" ? styles.toastSuccess : styles.toastError}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className={styles.toastIconWrapper}>
                    {toast.type === "success" ? (
                      <FaCircleCheck size={32} />
                    ) : (
                      <FaCircleExclamation size={32} />
                    )}
                  </span>
                  <h3 className={styles.toastTitle}>
                    {toast.type === "success" ? "Message Sent!" : "Something went wrong"}
                  </h3>
                  <p className={styles.toastMessage}>{toast.message}</p>
                  <button
                    className={styles.toastBtn}
                    onClick={() => setToast(null)}
                  >
                    OK
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </>
'''
content = re.sub(ui_block_conflict, ui_resolved, content)

with open('app/contact/page.tsx', 'w') as f:
    f.write(content)

