<template>
  <v-card>
    <v-card-title>
      Sensors 1
      <div class="flex-grow-1"></div>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'End Date (UTC)',
          align: 'left',
          sortable: false,
          value: 'End Date (UTC)'
        },
        { text: 'End Date (Local)(UTC+8)', value: 'End Date (Local)(UTC+8)' },
        { text: 'dH (mm)', value: 'dH (mm)' },
        { text: 'dH - min (mm)', value: 'dH - min (mm)' },
        { text: 'dH - max (mm)', value: 'dH - max (mm)' },
        { text: 'd2D (mm)', value: 'd2D (mm)' }
      ],
      items: [
        {
          'End Date (UTC)': '3657.5',
          'End Date (Local)(UTC+8)': '3657.5',
          'dH (mm)': '4',
          'dH - min (mm)': '4',
          'dH - max (mm)': '4',
          'd2D (mm)': '13'
        },
        {
          'End Date (UTC)': '3231.4',
          'End Date (Local)(UTC+8)': '3231.4',
          'dH (mm)': '-4',
          'dH - min (mm)': '-4',
          'dH - max (mm)': '-4',
          'd2D (mm)': '6'
        },
        {
          'End Date (UTC)': '5811.6',
          'End Date (Local)(UTC+8)': '5811.6',
          'dH (mm)': '-4',
          'dH - min (mm)': '-4',
          'dH - max (mm)': '-4',
          'd2D (mm)': '13'
        },
        {
          'End Date (UTC)': '1643.4',
          'End Date (Local)(UTC+8)': '1643.4',
          'dH (mm)': '-6',
          'dH - min (mm)': '-6',
          'dH - max (mm)': '-6',
          'd2D (mm)': '13'
        },
        {
          'End Date (UTC)': '3654.2',
          'End Date (Local)(UTC+8)': '3654.2',
          'dH (mm)': '0',
          'dH - min (mm)': '0',
          'dH - max (mm)': '0',
          'd2D (mm)': '14'
        },
        {
          'End Date (UTC)': '5651.6',
          'End Date (Local)(UTC+8)': '5651.6',
          'dH (mm)': '2',
          'dH - min (mm)': '2',
          'dH - max (mm)': '2',
          'd2D (mm)': '15'
        },
        {
          'End Date (UTC)': '1644.6',
          'End Date (Local)(UTC+8)': '1644.6',
          'dH (mm)': '-7',
          'dH - min (mm)': '-7',
          'dH - max (mm)': '-7',
          'd2D (mm)': '14'
        },
        {
          'End Date (UTC)': '3643.6',
          'End Date (Local)(UTC+8)': '3643.6',
          'dH (mm)': '-1',
          'dH - min (mm)': '-1',
          'dH - max (mm)': '-1',
          'd2D (mm)': '5'
        },
        {
          'End Date (UTC)': '5649.1',
          'End Date (Local)(UTC+8)': '5649.1',
          'dH (mm)': '0',
          'dH - min (mm)': '0',
          'dH - max (mm)': '0',
          'd2D (mm)': '8'
        },
        {
          'End Date (UTC)': '1651.1',
          'End Date (Local)(UTC+8)': '1651.1',
          'dH (mm)': '3',
          'dH - min (mm)': '3',
          'dH - max (mm)': '3',
          'd2D (mm)': '12'
        },
        {
          'End Date (UTC)': '3643.2',
          'End Date (Local)(UTC+8)': '3643.2',
          'dH (mm)': '-1',
          'dH - min (mm)': '-1',
          'dH - max (mm)': '-1',
          'd2D (mm)': '6'
        },
        {
          'End Date (UTC)': '5649.5',
          'End Date (Local)(UTC+8)': '5649.5',
          'dH (mm)': '-7',
          'dH - min (mm)': '-7',
          'dH - max (mm)': '-7',
          'd2D (mm)': '3'
        },
        {
          'End Date (UTC)': '1639.3',
          'End Date (Local)(UTC+8)': '1639.3',
          'dH (mm)': '-14',
          'dH - min (mm)': '-14',
          'dH - max (mm)': '-14',
          'd2D (mm)': '12'
        },
        {
          'End Date (UTC)': '3646.1',
          'End Date (Local)(UTC+8)': '3646.1',
          'dH (mm)': '-9',
          'dH - min (mm)': '-9',
          'dH - max (mm)': '-9',
          'd2D (mm)': '140'
        },
        {
          'End Date (UTC)': '5649.6',
          'End Date (Local)(UTC+8)': '5649.6',
          'dH (mm)': '-7',
          'dH - min (mm)': '-7',
          'dH - max (mm)': '-7',
          'd2D (mm)': '4'
        },
        {
          'End Date (UTC)': '1637.5',
          'End Date (Local)(UTC+8)': '1637.5',
          'dH (mm)': '-11',
          'dH - min (mm)': '-11',
          'dH - max (mm)': '-11',
          'd2D (mm)': '16'
        },
        {
          'End Date (UTC)': '3642.8',
          'End Date (Local)(UTC+8)': '3642.8',
          'dH (mm)': '-12',
          'dH - min (mm)': '-12',
          'dH - max (mm)': '-12',
          'd2D (mm)': '8'
        }
      ]
    }
  }
}
</script>
