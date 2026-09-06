import os

replacements = {
    'â€”': '—',    # em dash
    'â€“': '–',    # en dash
    'â€™': '’',    # right single quote
    'â‚¹': '₹',    # rupee
    'â€¦': '…',    # ellipsis
    'âš\xa0ï¸\x8f': '⚠️', # warning sign
    'â€œ': '“',    # left double quote
    'â€\x9d': '”',   # right double quote
}

directory = 'app'
modified_files = []

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css', '.js', '.jsx')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for k, v in replacements.items():
                new_content = new_content.replace(k, v)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                modified_files.append(filepath)

print("Modified files:")
for f in modified_files:
    print(f)
