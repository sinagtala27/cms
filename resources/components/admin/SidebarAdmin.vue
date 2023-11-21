<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl  bg-gray-300 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
    >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
      
      >
      <!-- Toggler -->
      <a
        class="justify-center mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:-mb-4 lg:mt-0"
        >
      <img
        src="https://ro11.ched.gov.ph/wp-content/uploads/2022/02/cropped-ched_logo.png"
        class="h-15 w-20 rounded-full "
        />
        </a>
      <!-- Brand -->
      <a
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        
      >
        WELCOME,  
      </a>
      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
        </li>
       
      </ul>
      <!-- Collapse -->
     
        <!-- Form -->
       
        <!-- Navigation -->
        <ul class="md:flex-col md:min-w-full flex flex-col justify-between list-none list-inside">
          <li class="items-center">
            <router-link
              class="text-pink-500 hover:text-pink-600 text-xs uppercase py-6 font-bold block"
              :to="'/admin/dashboard'"
              ><i class="fas fa-tv opacity-75 mr-2 text-sm"></i>
              Dashboard</router-link
            >
          </li>
          <li class="items-center">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-6 font-bold block"
              href="#/landing"
              ><i class="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>
             Tickets</a
            >
          </li>
          <li class="items-center">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-6 font-bold block"
              ><i class="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>
              Analytics</a
            >
          </li>
          <li class="items-center">
            <router-link
              :to="'/admin/categories'"
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-6 font-bold block"
              ><i class="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>
              Categories</router-link
            >
          </li>
          <li class="items-center">
            <a
              class="text-blueGray-300 text-xs uppercase py-6 font-bold block"
              href="#pablo"
              ><i
                class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"
              ></i>
              HEI</a
            >
          </li>
          <li class="items-center">
            <a
              class="text-blueGray-300 text-xs uppercase py-6 font-bold block"
             
              ><i class="fas fa-tools text-blueGray-300 mr-2 text-sm"></i>
              CHED Services</a
            >
          </li>
          <li class="items-center">
            <button type="button" 
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
           
            >  
            Alternative</button>
          </li>
        </ul>
      </div>
  
  </nav>
</template>
<script>
import 'flowbite';
export default {
    name: "SidearComponent",
};
</script>