/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../views/MainLayout.vue";
import SpecialTicketPurchase from "../views/SpecialTicketPurchase.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "layout",
            component: MainLayout,
            children: [
                {
                    path: '/special-ticket-purchase',
                    name: 'SpecialTicketPurchase',
                    component: SpecialTicketPurchase
                }
            ]
        },
    ]
})

export default router;