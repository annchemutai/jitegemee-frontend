<script setup>
import {ref} from 'vue'
const courses = ref([
    {
        name: "Computer Science",
        school: "School of Computing and Engineering",
        description: "Best course for computer enthusiasts",
        intake: "July 2025"
    },
    {
        name: "Medicine",
        school: "School of Medicine and Surgery",
        description: "Best course for learning about the human body",
        intake: "September 2025"
    },
    {

        name: "Data Science and Statistics",
        school: "Institute of Mathematics",
        description: "Make data make sense",
        intake: "July 2025"
    },
    {
        name: "Mechanical Engineering",
        school: "School of Computing and Engineering",
        description: "Best course for machinery",
        intake: "July 2025"
    },
    {
        name: "Business and IT",
        school: "School of Computing and Engineerings",
        description: "How to combine IT in Business",
        intake: "April 2026"
    },
    {
        name: "Architecture",
        school: "Institute of Mathematics",
        description: "Learn to design the best architecture",
        intake: "July 2025"
    },
    {
        name: "Communications",
        school: "School of Humanities and Social Sciences",
        description: "Learn to be a good communicator",
        intake: "July 2025"
    },
    {
        name: "Hospitality and Tourism",
        school: "School of Hospitality and Tourism",
        description: "Service industry made better",
        intake: "September 2025"
    },
    {
        name: "Financial Engineering",
        school: "Institute of Mathematics",
        description: "Best for finance enthusiasts",
        intake: "July 2025"
    },
    {
        name: "Law",
        school: "School of Law",
        description: "Make law make sense",
        intake: "April 2026"
    },

])

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for="course in courses">
                <v-card color = "indigo-lighten-2">
                <v-card-item>
                <v-card-title>{{course.name}}</v-card-title>

                <v-card-subtitle>{{course.school}}</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                {{course.description}}
                </v-card-text>
                <v-card-text>
                    {{course.intake}}
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>