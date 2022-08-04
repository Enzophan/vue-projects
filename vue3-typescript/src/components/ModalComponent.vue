<template>
  <div
    class="modal"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Room</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">
                Room Name:
              </label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="form.roomName"
                placeholder="Room Name"
                required
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="addRoom">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  emits: ["closeModal", "addRoom"],
  props: {
    openModal: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const form = reactive({
      roomName: "",
    });
    const closeModal = (e: Event) => {
      e.preventDefault();
      emit("closeModal");
    };
    const addRoom = () => {
      emit("addRoom", form.roomName);
      form.roomName = "";
    };
    return { form, closeModal, addRoom };
  },
});
</script>


<style lang="css" scoped>
.modal {
  display: block;
}
</style>