import os
import glob

def fix_mojibake(text):
    try:
        # If it was UTF-8 interpreted as cp1252 and saved as UTF-8
        # We can reverse it by encoding to cp1252 and decoding as UTF-8
        return text.encode('cp1252').decode('utf-8')
    except Exception as e:
        # Fallback to manual replacements if automatic fails
        replacements = {
            "â€”": "—",
            "â€“": "–",
            "â€™": "’",
            "â‚¹": "₹",
            "âš ï¸": "⚠️",
            "â€œ": "“",
            "â€ ": "”"
        }
        for k, v in replacements.items():
            text = text.replace(k, v)
        return text

# Test
test_str = "â€” â€“ â€™ â‚¹ âš ï¸ â€œ â€ "
print("Original:", test_str)
print("Fixed manual:", fix_mojibake(test_str))
try:
    print("Fixed auto:", test_str.encode('cp1252').decode('utf-8'))
except Exception as e:
    print("Auto failed:", e)

