<template>
  <span>{{ usd }}</span>
</template>

<script>
export default {
  data() {
    return {
      amount: 10
    }
  },
  computed: {
    usd() {
      return '$' + this.amount
    }
  }
}
</script>