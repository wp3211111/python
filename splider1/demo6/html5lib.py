# import html5lib

# with open("index.html", "rb") as f:
#     parser = html5lib.HTMLParser(strict=True)
#     document = parser.parse(f)

import html5lib
document = html5lib.parse("<p>Hello World!")
