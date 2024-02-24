import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../components/SignUp.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AboutUs from "../views/AboutUs.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import ManageUser from "../views/ManageUser.vue";
import EditUser from "../views/EditUser.vue";
import HomeAdmin from "../views/HomeAdmin.vue";
import ManageBook from "../views/ManageBook.vue";
import ManageLocations from "../views/ManageLocations.vue";
import ManageStatic from "../views/ManageStatic.vue";
import DetailLocation from "../views/DetailLocation.vue";
import RenderPlan from "../views/RenderPlan.vue";
import Login from "../components/Login.vue";
import Admin from "../components/Admin.vue";
import UserProfile from "../components/UserProfile.vue";
import Footer from "../components/Footer.vue";

import Promotion from "../views/Promotion.vue";
import Reschedule from "../views/Reschedule.vue";
import Refund from "../views/RefundTicket.vue";
import DetailSchedule from "../views/DetailSchedule.vue";
import Booking from "../views/Booking.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "homeview",
          component: HomeView,
        },
        {
          path: "/about",
          name: "aboutus",
          component: AboutUs,
        },
        {
          path: "/contact",
          name: "contact",
          component: Contact,
        },
        {
          path: "/services",
          name: "services",
          component: Services,
          children: [
            {
              path: "render_plan",
              name: "render_plan",
              component: RenderPlan,
              children: [
                {
                  path: "detail_schedule",
                  name: "detail_schedule",
                  component: DetailSchedule,
                },
                {
                  path: "reschedule",
                  name: "reschedule",
                  component: Reschedule,
                },
                {
                  path: "refund",
                  name: "refund",
                  component: Refund,
                },
                {
                  path: "promotion",
                  name: "promotion",
                  component: Promotion,
                },
              ],
            },
            {
              path: "booking",
              name: "booking",
              component: Booking,
            },
          ],
        },
        {
          path: "/footer",
          name: "footer",
          component: Footer,
        },
      ],
    },
    {
      path: "/singup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      children: [
        {
          path: "home_admin",
          name: "home_admin",
          component: HomeAdmin,
        },
        {
          path: "manage_user",
          name: "manage_user",
          component: ManageUser,
          children: [
            {
              path: "edituser",
              name: "edituser",
              component: EditUser,
            },
          ],
        },
        {
          path: "manage_locations",
          name: "manage_locations",
          component: ManageLocations,
        },
        {
          path: "manage_booking",
          name: "manage_booking",
          component: ManageBook,
        },
        {
          path: "manage_static_and_report",
          name: "manage_static_and_report",
          component: ManageStatic,
        },
      ],
    },
    {
      path: "/userprofile",
      name: "userprofile",
      component: UserProfile,
    },
    {
      path: "/detaillocation",
      name: "detaillocation",
      component: DetailLocation,
    },
  ],
});

export default router;
