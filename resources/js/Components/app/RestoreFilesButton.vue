<template>
  <button
    @click="onClick"
    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4 mr-2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>

    Restore
  </button>
  <ConfirmationDialog
    :show="showConfirmationDialog"
    message="Are you sure want to restore selected files? "
    @cancel="onCancel"
    @confirm="onConfirm"
  >
    Restore
  </ConfirmationDialog>
</template>

<script setup>
// Imports
import { ref } from "vue";
import ConfirmationDialog from "@/Components/ConfirmationDialog.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { showErrorDialog, showSuccessNotification } from "@/event-bus.js";

// Uses
const page = usePage();
const form = useForm({
  all: null,
  ids: [],
  parent_id: null,
});

// Refs
const showConfirmationDialog = ref(false);

// Props & Emit
const props = defineProps({
  allSelected: {
    type: Boolean,
    default: false,
    required: false,
  },
  selectedIds: {
    type: Array,
    required: false,
  },
});

const emit = defineEmits(["restore"]);

// Computed

// Methods
function onClick() {
  if (!props.allSelected && !props.selectedIds.length) {
    showErrorDialog("Please select at least one file to restore");
    return;
  }
  showConfirmationDialog.value = true;
}

function onCancel() {
  showConfirmationDialog.value = false;
}

function onConfirm() {

  if (props.allSelected) {
    form.all = true;
  } else {
    form.ids = props.selectedIds;
  }

  form.post(route("file.restore"), {
    onSuccess: () => {
      showConfirmationDialog.value = false;
      emit("restore");
      // Todo show succes notification

      showSuccessNotification("Selected files have been restored");
    },
  });
}

// Hooks
</script>

<style scoped>
</style>