## 🌟Interactive Image Gallery

-A responsive, keyboard-accessible image gallery built using React, Axios, and Tailwind CSS.
-It fetches images from the Picsum API, supports pagination, keyboard navigation, and includes a fully interactive modal view with scroll-locking.

## Features

✔️ Dynamic Image Fetching
-Images are fetched from the Picsum API.
-Pagination supported using page numbers (1 → ∞).
-Automatically scrolls to the top when the page changes.

✔️ Loading Skeletons
-Displays animated skeleton cards while loading.
-Preserves layout (no content shifting).

✔️ Keyboard Navigation
← Arrow Left : Previous page
→ Arrow Right : Next page
Esc : Close modal

✔️ Interactive Modal
-Opens when clicking an image or pressing Enter.
-Shows author name, image preview, and source link.
-Click outside or press Esc to close.
-Background scroll locked while modal is open.

✔️ Fully Responsive

-Works on mobile, tablet, and desktop.
-Modal is size-adaptive (max-h-[80vh] / max-w-4xl).

🛠️ Tech Stack

| Technology       | Purpose            |
| ---------------- | ------------------ |
| **React**        | UI library         |
| **Axios**        | API calls          |
| **Tailwind CSS** | Styling            |
| **Picsum API**   | Free random images |

🔍 How It Works (High-Level Flow)

1. Initial render
   -userdata = []
   -Show skeletons.

2. Fetch images
   axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

3. Set loading / error states
   -isLoading = true → show placeholders
   -If success → userdata = response.data
   -If fail → show error message

4. Pagination

-Buttons update index
-Keyboard left/right also update page
-useEffect triggers new fetch on page change

5. Modal

-Click card → setSelected(elem)
-Backdrop click closes modal
-stopPropagation() prevents accidental closing
-ESC closes modal

🧠 Improvements (Optional Ideas)

-Add animation for modal (fade-in / zoom-in)
-Add image lazy-loading
-Add search or filter options
-Infinite scrolling instead of manual pagination
-Lightbox next/previous inside modal
