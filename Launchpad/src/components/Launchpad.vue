
<template>
  <div class="q-pa-md">
    <q-table
      grid
      :rows="rows"
      :columns="columns"
      row-key="name"
      row-width="100px"
      hide-bottom
      id="LaunchpadWrapper"

    >
    </q-table>
  </div>
</template>

<style lang="scss">
  @import "../css/app.scss";
</style>


<script>

const columns = [
  {
    name: 'desc',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67
  },

]

export default {
    name: "Launchpad",
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>