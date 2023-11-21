<template>
  <div class="block max-w-xl mx-auto rounded-lg bg-cyan-200/50 p-6 shadow-md dark:bg-neutral-700">
    <form>
      <div class="border-blue-900/10 pb-10">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Track Your Complaint Ticket</h2>
        
        <div class="mb-4">
          <label for="ticketID" class="block text-sm font-medium text-gray-900">Enter Ticket ID</label>
          <input
            id="ticketID"
            name="ticketID"
            type="text"
            v-model="ticketID"
            class="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
            placeholder="Ticket ID"
          />
        </div>

        <div class="flex items-center justify-center">
          <button
            type="button"
            @click="openModal"
            class="w-full md:w-auto px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none"
          >TRACK</button>
        </div>
      </div>
    </form>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="fixed inset-0 flex items-center justify-center">
        <TransitionChild
          as="template"
          enter="transition-opacity duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-50" />
        </TransitionChild>

        <div class="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
          <DialogTitle class="text-2xl font-medium text-gray-900 mt-4 px-6">Successful</DialogTitle>
          <div class="px-6 py-4">
            <p class="text-gray-700">
              Ticket ID is: {{ ticketID }}. Tracking Details:
              <ul class="list-disc ml-6">
                <li>- Detail 1</li>
                <li>- Detail 2</li>
                <li>- Detail 3</li>
                <li>- ********</li>
              </ul>
            </p>
          </div>

          <div class="p-4">
            <button
              type="button"
              @click="closeModal"
              class="w-full bg-blue-100 text-blue-900 text-sm font-medium rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >Got it, thanks!</button>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogTitle
} from '@headlessui/vue'

const isOpen = ref(false)
const ticketID = ref('')

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}
</script>
