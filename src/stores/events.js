import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
  const events =ref([
        {
            name: "Community Outreach at Northern Kenya",
            image: "../../public/images/events/ian-macharia-gogGhbvHrYw-unsplash.jpg",
            date: "July 6th 2025",
            location: "Northern Kenya School",
            category: "Community Outreach"
        },
        {
            name: "InterClub Sports Competition",
            image: "../../public/images/events/cie-ptit-8k0R8cAmsSE-unsplash.jpg",
            date: "30th June",
            location: "Sports Complex",
            category: "Clubs"
        },
        {
            name: "ICT Club Visit to Konza",
            image: "../../public/images/events/Konza.jpg",
            date: "28th June 2025",
            location: "Konza Technopolis",
            category: "Clubs"
        },
        {
            name: "Software Development Bootcamp",
            image: "../../public/images/events/arif-riyanto-G1N9kDHqBrQ-unsplash.jpg",
            date: "2nd July 2025",
            location: "iLabAfrica",
            category: "Bootcamps"
        },
    ])

  return { events }
})