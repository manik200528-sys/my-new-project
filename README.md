# College Faculty Directory & AI-Powered Guidance System

A simple yet powerful web application that helps students find faculty details easily and get personalized guidance recommendations.

## Features

### 1. Faculty Directory Search
- Search faculty members by name or ID
- View detailed information including:
  - Faculty ID and Name
  - Department (CSE, IT, ECE, Mechanical, etc.)
  - Position (HOD, Course Coordinator, Senior Faculty, etc.)
  - Cabin/Office Number
  - Email Address
  - Phone Number
  - Free/Available Time Slots
  - Areas of Expertise

### 2. Complete Faculty Listing
- Browse all faculty members in a grid view
- Quick overview of each faculty member
- Easy navigation and filtering

### 3. AI-Powered Faculty Recommendation
- Students describe their problem or question
- The system analyzes the query using keyword matching
- Recommends the most suitable faculty member based on:
  - Problem/Question Type
  - Faculty's Expertise
  - Subject Matter Specialization
- Displays complete contact details and availability

## Project Structure

```
my-new-project/
├── index.html      # Main HTML file
├── style.css       # Styling and layout
├── script.js       # JavaScript functionality and faculty database
└── README.md       # Project documentation
```

## How to Use

1. **Open the Website**: Open `index.html` in a web browser

2. **Search for Faculty**:
   - Use the search bar in the "Search Faculty" section
   - Enter faculty name or ID
   - Click "Search" button

3. **Get Faculty Recommendation**:
   - Describe your problem in the text area under "Need Help? Find Right Faculty"
   - Click "Get Recommendation" button
   - The system will suggest the best faculty to approach

4. **Browse Complete Directory**:
   - Scroll down to see all faculty members in the directory
   - Click on any faculty card for more details

## Faculty Database

The application includes sample faculty data for multiple departments:

- **CSE (Computer Science & Engineering)**: Dr. Rajesh Kumar (HOD), Prof. Priya Singh (Course Coordinator)
- **IT (Information Technology)**: Dr. Arun Verma (Senior Faculty), Ms. Neha Gupta (Faculty)
- **ECE (Electronics & Communication Engineering)**: Prof. Vikram Patel (Senior Faculty), Dr. Sneha Desai (Course Coordinator)
- **Mechanical Engineering**: Prof. Suresh Kumar (HOD)

## Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Modern responsive design with gradient backgrounds
- **JavaScript**: Client-side logic, search functionality, and AI recommendation engine
- **No External Dependencies**: Pure vanilla JavaScript (no frameworks required)

## Features Details

### Search Functionality
- Real-time search by faculty name or ID
- Case-insensitive matching
- Displays matching faculty with all details

### Recommendation Algorithm
- Keyword-based matching
- Weighted scoring system
- Matches student queries to faculty expertise
- Falls back to HOD if no specific match found

### Responsive Design
- Mobile-friendly interface
- Works on desktop, tablet, and mobile devices
- Adaptive grid layout

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/manik200528-sys/my-new-project.git
   ```

2. Open the project:
   ```bash
   cd my-new-project
   open index.html
   ```
   Or simply double-click `index.html` in file explorer

## Customization

To add or modify faculty data:
1. Open `script.js`
2. Locate the `facultyDatabase` array
3. Add or modify faculty objects
4. Update expertise keywords in the recommendation algorithm

## Future Enhancements

- Integration with college database
- Faculty availability calendar
- Email notifications
- Student feedback and ratings
- Department-wise filtering
- Meeting scheduling feature
- Mobile app version

## Author

Created for college management system

## License

Open source - Feel free to use and modify as needed

## Support

For issues or suggestions, please feel free to create an issue or contribute to the project.
