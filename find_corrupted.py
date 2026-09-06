import os
import re

directory = 'app'

corruptions = set()
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css', '.js', '.jsx')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                # Find all sequences starting with â
                matches = re.findall(r'â[^\x20-\x7E]*', content)
                for m in matches:
                    corruptions.add(m)

for c in corruptions:
    print(repr(c), "-> hex:", c.encode('utf-8').hex())
