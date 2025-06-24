<script setup>
    import {ref} from 'vue'

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
</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for = "event in events" :key="event">
                <v-card
                    class="mx-auto"
                    max-width="400"
                    color = "indigo"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    :src="event.image"
                    cover
                    >
                    <v-card-title>{{ event.name }}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                    {{ event.date }}
                    </v-card-subtitle>

                    <v-card-text>
                    <div>{{event.location}}</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="orange" :text="event.category"></v-btn>

                    <v-btn color="orange" text="Explore"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>