import easyocr
from pdf2image import convert_from_path
import sys

pdf_path = sys.argv[1]

reader = easyocr.Reader(['en'])
pages = convert_from_path(pdf_path)

final_text = ""

for i, page in enumerate(pages):
    image_path = f'temp_page_{i}.png'
    page.save(image_path, 'PNG')
    results = reader.readtext(image_path, detail=0)
    final_text += '\n'.join(results) + "\n"

print(final_text)
