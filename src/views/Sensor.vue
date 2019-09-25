<template>
    <div>
        <div> {{ $route.params.id }} </div>
        <Tab />
        <TableCrud />
    </div>
</template>

<script>
import TableCrud from '@/components/TableCrud'
import Tab from '@/components/Tab'

export default {

  components: {
    TableCrud,
    Tab
  }
}
</script>
