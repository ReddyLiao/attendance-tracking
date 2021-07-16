<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: page === 0 }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: item === page + 1 }"
        v-for="item in totalPages"
        :key="item"
      >
        <a class="page-link" href="#" @click.prevent="updatePage(item - 1)">{{
          item
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: page === totalPages - 1 }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["totalPages", "page"],
  emits: ["changePage", "getData"],
  setup(props, { emit }) {
    const updatePage = (page) => {
      if (page + 1 >= props.totalPages) {
        emit("changePage", props.totalPages - 1);
      } else if (page + 1 < 1) {
        emit("changePage", 0);
      } else {
        emit("changePage", page);
      }
      emit("getData");
    };
    return {
      ...props,
      updatePage,
    };
  },
};
</script>
