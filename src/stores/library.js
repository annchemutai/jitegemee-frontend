import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                title: "Computer Science: Learner's Book",
                image: "/images/books/book1.jpeg",
                description: "Modern Technology Computer Science: Learner's Book for comprehensive study",
            },
            {
                id: 2,
                title: "Mass Communication",
                image: "/images/books/book3.jpeg",
                description: "Essential Mass COmmunication for convergencec culture and media literacy",
            }, 
            {
                id: 3,
                title: "Medicine and Surgery",
                image: "/images/books/book5.jpeg",
                description: "Medicine and Surgery: a concise texbook for comprehensive study",
            }, 
            {
                id: 4,
                title: "Computer Science: Learner's Book",
                image: "/images/books/book1.jpeg",
                description: "Modern Technology Computer Science: Learner's Book for comprehensive study",
            },
            {
                id: 5,
                title: "Mass Communication",
                image: "/images/books/book3.jpeg",
                description: "Essential Mass COmmunication for convergencec culture and media literacy",
            }, 
            {
                id: 6,
                title: "Medicine and Surgery",
                image: "/images/books/book5.jpeg",
                description: "Medicine and Surgery: a concise texbook for comprehensive study",
            }, 
            {
                id: 7,
                title: "Computer Science: Learner's Book",
                image: "/images/books/book1.jpeg",
                description: "Modern Technology Computer Science: Learner's Book for comprehensive study",
            },
            {
                id: 8,
                title: "Mass Communication",
                image: "/images/books/book3.jpeg",
                description: "Essential Mass COmmunication for convergencec culture and media literacy",
            }, 
            {
                id: 9,
                title: "Medicine and Surgery",
                image: "/images/books/book5.jpeg",
                description: "Medicine and Surgery: a concise texbook for comprehensive study",
            }, 
            {
                id: 10,
                title: "Medicine and Surgery",
                image: "/images/books/book5.jpeg",
                description: "Medicine and Surgery: a concise texbook for comprehensive study",
            },        
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    }
})
