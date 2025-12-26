// Faculty Database
const facultyDatabase = [
    {
        id: 'CS001',
        name: 'Dr. Rajesh Kumar',
        department: 'CSE',
        position: 'HOD',
        cabin: 'A-201',
        email: 'rajesh.kumar@college.edu',
        phone: '+91-9876543210',
        freeTimings: ['10:00-11:00', '14:00-15:00', '16:00-17:00'],
        expertise: ['Data Structures', 'Algorithms', 'Database Design', 'Academic Guidance']
    },
    {
        id: 'CS002',
        name: 'Prof. Priya Singh',
        department: 'CSE',
        position: 'Course Coordinator',
        cabin: 'A-202',
        email: 'priya.singh@college.edu',
        phone: '+91-9876543211',
        freeTimings: ['11:00-12:00', '15:00-16:00'],
        expertise: ['Web Development', 'JavaScript', 'Frontend Design', 'Academic Projects']
    },
    {
        id: 'IT001',
        name: 'Dr. Arun Verma',
        department: 'IT',
        position: 'Senior Faculty',
        cabin: 'B-101',
        email: 'arun.verma@college.edu',
        phone: '+91-9876543212',
        freeTimings: ['10:00-11:00', '13:00-14:00', '16:00-17:30'],
        expertise: ['Network Security', 'Cybersecurity', 'IT Infrastructure', 'Career Guidance']
    },
    {
        id: 'IT002',
        name: 'Ms. Neha Gupta',
        department: 'IT',
        position: 'Faculty',
        cabin: 'B-102',
        email: 'neha.gupta@college.edu',
        phone: '+91-9876543213',
        freeTimings: ['11:00-12:30', '14:00-15:00', '15:30-16:30'],
        expertise: ['Cloud Computing', 'AWS', 'DevOps', 'Technical Guidance']
    },
    {
        id: 'EC001',
        name: 'Prof. Vikram Patel',
        department: 'ECE',
        position: 'Senior Faculty',
        cabin: 'C-301',
        email: 'vikram.patel@college.edu',
        phone: '+91-9876543214',
        freeTimings: ['10:00-11:30', '14:00-15:30'],
        expertise: ['Digital Electronics', 'Embedded Systems', 'IoT', 'Hardware Projects']
    },
    {
        id: 'EC002',
        name: 'Dr. Sneha Desai',
        department: 'ECE',
        position: 'Course Coordinator',
        cabin: 'C-302',
        email: 'sneha.desai@college.edu',
        phone: '+91-9876543215',
        freeTimings: ['09:00-10:00', '12:00-13:00', '15:00-16:00'],
        expertise: ['Signal Processing', 'Communication Systems', 'Research Guidance']
    },
    {
        id: 'MECH001',
        name: 'Prof. Suresh Kumar',
        department: 'Mechanical',
        position: 'HOD',
        cabin: 'D-401',
        email: 'suresh.kumar@college.edu',
        phone: '+91-9876543216',
        freeTimings: ['10:00-11:00', '14:00-15:30', '16:00-17:00'],
        expertise: ['Thermodynamics', 'CAD Design', 'Manufacturing', 'Industry Connections']
    }
];

// Display all faculty on page load
window.addEventListener('DOMContentLoaded', function() {
    displayAllFaculty();
});

// Search Faculty Function
function searchFaculty() {
    const searchTerm = document.getElementById('facultySearch').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    
    if (!searchTerm) {
        resultsDiv.innerHTML = '<p class="no-results">Please enter a faculty name or ID to search</p>';
        return;
    }
    
    const results = facultyDatabase.filter(faculty => 
        faculty.name.toLowerCase().includes(searchTerm) || 
        faculty.id.toLowerCase().includes(searchTerm)
    );
    
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p class="no-results">No faculty found matching your search</p>';
    } else {
        resultsDiv.innerHTML = results.map(faculty => createFacultyCard(faculty)).join('');
    }
}

// Display all faculty
function displayAllFaculty() {
    const facultyList = document.getElementById('facultyList');
    facultyList.innerHTML = facultyDatabase.map(faculty => createFacultyItem(faculty)).join('');
}

// Create Faculty Card for search results
function createFacultyCard(faculty) {
    return `
        <div class="faculty-card">
            <h3>${faculty.name}</h3>
            <p><span class="label">ID:</span> ${faculty.id}</p>
            <p><span class="label">Department:</span> ${faculty.department}</p>
            <p><span class="label">Position:</span> ${faculty.position}</p>
            <p><span class="label">Cabin Number:</span> ${faculty.cabin}</p>
            <p><span class="label">Email:</span> ${faculty.email}</p>
            <p><span class="label">Phone:</span> ${faculty.phone}</p>
            <p><span class="label">Available Times:</span> ${faculty.freeTimings.join(', ')}</p>
            <p><span class="label">Expertise:</span> ${faculty.expertise.join(', ')}</p>
        </div>
    `;
}

// Create Faculty Item for directory listing
function createFacultyItem(faculty) {
    return `
        <div class="faculty-item">
            <h3>${faculty.name}</h3>
            <div class="info"><strong>ID:</strong> ${faculty.id}</div>
            <div class="info"><strong>Department:</strong> <span class="badge">${faculty.department}</span></div>
            <div class="info"><strong>Position:</strong> ${faculty.position}</div>
            <div class="info"><strong>Cabin:</strong> ${faculty.cabin}</div>
            <div class="info"><strong>Email:</strong> ${faculty.email}</div>
        </div>
    `;
}

// Recommend Faculty based on problem description
function recommendFaculty() {
    const problemDescription = document.getElementById('problemDescription').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('recommendationResults');
    
    if (!problemDescription) {
        resultsDiv.innerHTML = '<p class="no-results">Please describe your problem or question</p>';
        return;
    }
    
    // Keywords for different types of problems
    const keywordMap = {
        'cs001': {
            keywords: ['algorithm', 'data structure', 'database', 'design', 'academic', 'course', 'guidance', 'hod'],
            weight: 0
        },
        'cs002': {
            keywords: ['web', 'javascript', 'frontend', 'html', 'css', 'project', 'website', 'design'],
            weight: 0
        },
        'it001': {
            keywords: ['security', 'cyber', 'network', 'hacking', 'protection', 'career', 'placement'],
            weight: 0
        },
        'it002': {
            keywords: ['cloud', 'aws', 'devops', 'deployment', 'server', 'docker', 'technical'],
            weight: 0
        },
        'ec001': {
            keywords: ['electronics', 'circuit', 'embedded', 'iot', 'hardware', 'microcontroller', 'project'],
            weight: 0
        },
        'ec002': {
            keywords: ['signal', 'communication', 'research', 'paper', 'publication', 'signal processing'],
            weight: 0
        },
        'mech001': {
            keywords: ['thermodynamics', 'heat', 'cad', 'design', 'manufacturing', 'industry', 'internship', 'placement'],
            weight: 0
        }
    };
    
    // Calculate match scores
    Object.keys(keywordMap).forEach(id => {
        const keywords = keywordMap[id].keywords;
        let score = 0;
        keywords.forEach(keyword => {
            if (problemDescription.includes(keyword)) {
                score += 10;
            }
        });
        keywordMap[id].weight = score;
    });
    
    // Find faculty with highest score
    let recommendedId = null;
    let maxScore = 0;
    
    Object.keys(keywordMap).forEach(id => {
        if (keywordMap[id].weight > maxScore) {
            maxScore = keywordMap[id].weight;
            recommendedId = id;
        }
    });
    
    // Default recommendation if no keywords match
    if (maxScore === 0) {
        // Return HOD as default recommendation
        const recommendedFaculty = facultyDatabase.find(f => f.position === 'HOD');
        resultsDiv.innerHTML = createRecommendationCard(recommendedFaculty, 'No specific match, but HOD can guide you');
    } else {
        const recommendedFaculty = facultyDatabase.find(f => f.id.toLowerCase() === recommendedId);
        resultsDiv.innerHTML = createRecommendationCard(recommendedFaculty, 'Best match for your query');
    }
}

// Create Recommendation Card
function createRecommendationCard(faculty, reason) {
    return `
        <div class="faculty-card" style="border-left-color: #28a745;">
            <h3>Recommended Faculty:</h3>
            <h2 style="color: #28a745; margin: 10px 0;">${faculty.name}</h2>
            <div class="recommendation-badge">✓ ${reason}</div>
            <p style="margin-top: 15px;"><span class="label">Department:</span> ${faculty.department}</p>
            <p><span class="label">Position:</span> ${faculty.position}</p>
            <p><span class="label">Cabin Number:</span> ${faculty.cabin}</p>
            <p><span class="label">Email:</span> <a href="mailto:${faculty.email}" style="color: #667eea; text-decoration: none;">${faculty.email}</a></p>
            <p><span class="label">Phone:</span> ${faculty.phone}</p>
            <p><span class="label">Available Times:</span> ${faculty.freeTimings.join(', ')}</p>
            <p><span class="label">Can Help With:</span> ${faculty.expertise.join(', ')}</p>
        </div>
    `;
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('facultySearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchFaculty();
            }
        });
    }
    
    const problemInput = document.getElementById('problemDescription');
    if (problemInput) {
        problemInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                recommendFaculty();
            }
        });
    }
});
