<script setup>

</script>

<template>
    <!-- Rotating images -->
    <v-carousel>
    <v-carousel-item
        src="/images/erika-fletcher-2Z0yN0Dhomw-unsplash.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="/images/nqobile-vundla-DwEfVKirLW4-unsplash.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="/images/nqobile-vundla-DwEfVKirLW4-unsplash.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="/images/rut-miit-YIdkWynJdSk-unsplash.jpg"
        cover
    ></v-carousel-item>
    </v-carousel>

    <!-- Latest from jitegemee -->
     <v-container>
        <v-row>
            <v-col cols="12" md="4">
            <v-card
                subtitle="Graduation of Friday"
                text="Soon, students will gather, adorned in their caps and gowns, ready to cross the stage and receive the degrees they've diligently pursued. This ceremony isn't just about diplomas; it's a recognition of countless hours spent in lectures, labs, and libraries, the overcoming of academic challenges, and the forging of lifelong friendships. "
                title="Class of 2025!"
                color = "indigo-lighten-2"
            ></v-card>
            </v-col>

            <v-col cols="12" md="4">
            <v-card color = "indigo-lighten-2">
                <template v-slot:title>
                JTG Football Team emerge top
                </template>

                <template v-slot:subtitle>
                Sports
                </template>

                <template v-slot:text>
            For years, the Ravens had been building towards this moment. Under the guidance of veteran Coach Miller, they'd transformed from an underdog team to a formidable force. This season had been a testament to their dedication, marked by grueling practices, strategic brilliance, and an unshakeable belief in each other.
                </template>
            </v-card>
            </v-col>

            <v-col cols="12" md="4">
            <v-card color = "indigo-lighten-2">
                <v-card-item>
                <v-card-title>ICT Club visits Safaricom</v-card-title>

                <v-card-subtitle>Clubs</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                During their visit, the students were given an exclusive tour of Safaricom's state-of-the-art facilities. They had the chance to interact with Safaricom's technical teams, gaining firsthand exposure to the complex infrastructure that underpins the company's vast network and innovative services, including M-Pesa. 
                </v-card-text>
            </v-card>
        </v-col>
        </v-row>
     </v-container>
     
     <!-- Partners -->
    <v-container>
        <v-row>
            <v-col cols="12" md="2">
                <v-img src = "../../public/images/cio.png" aspect-ratio="1" ></v-img>       
            </v-col>
            <v-col cols="12" md="2">
                <v-img src = "../../public/images/strath.png" aspect-ratio="1" ></v-img>       
            </v-col>
            <v-col cols="12" md="2">
                <v-img src = "../../public/images/deloitte-01-400x280.png" aspect-ratio="1" ></v-img>       
            </v-col>
            <v-col cols="12" md="2">
                <v-img src = "../../public/images/cio.png" aspect-ratio="1" ></v-img>       
            </v-col>
            <v-col cols="12" md="2">
                <v-img src = "../../public/images/strath.png" aspect-ratio="1" ></v-img>       
            </v-col>
            <v-col cols="12" md="2">
                <v-img src = "../../public/images/deloitte-01-400x280.png" aspect-ratio="1" ></v-img>       
            </v-col>
        </v-row>
    </v-container>
</template>