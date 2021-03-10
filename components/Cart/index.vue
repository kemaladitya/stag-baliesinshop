<template>
  <div>
    <!-- <Desktop
      v-if="screen === 'desktop'"
      id="desktop"
      :expansion="expansion"
      :expanddetail="expanddetail"
      :subsorder="subsorder"
      :normalorder="normalorder"
      :changeqty="changeqty"
      :parsedate="parsedate"
      :parseprice="parseprice"
      :changeqtysubsitem="changeqtysubsitem"
      :deleterp="deleterp"
      :selectsubsdate="selectsubsdate"
      :changehandler="changehandler"
      :changenotes="changenotes"
      :changedeliverytime="changedeliverytime"
    />
    v-else -->
    <Mini
      v-if="screen == 'mini'"
      id="mini"
      :expansion="expansion"
      :expanddetail="expanddetail"
      :subsorder="subsorder"
      :normalorder="normalorder"
      :changeqty="changeqty"
      :parsedate="parsedate"
      :parseprice="parseprice"
      :changeqtysubsitem="changeqtysubsitem"
      :deleterp="deleterp"
      :selectsubsdate="selectsubsdate"
      :changehandler="changehandler"
      :changenotes="changenotes"
      :changedeliverytime="changedeliverytime"
      :changedeliverysingletime="changedeliverysingletime"
      :updatecache="updatecache"
    />
    <Mobile
      v-if="screen == 'mobile'"
      id="mobile"
      :expansion="expansion"
      :expanddetail="expanddetail"
      :subsorder="subsorder"
      :normalorder="normalorder"
      :changeqty="changeqty"
      :parsedate="parsedate"
      :parseprice="parseprice"
      :changeqtysubsitem="changeqtysubsitem"
      :deleterp="deleterp"
      :selectsubsdate="selectsubsdate"
      :changehandler="changehandler"
      :changenotes="changenotes"
      :changedeliverytime="changedeliverytime"
      :changedeliverysingletime="changedeliverysingletime"
      :updatecache="updatecache"
    />
    <Desktop
      v-if="screen == 'desktop'"
      id="desktop"
      :expansion="expansion"
      :expanddetail="expanddetail"
      :subsorder="subsorder"
      :normalorder="normalorder"
      :changeqty="changeqty"
      :parsedate="parsedate"
      :parseprice="parseprice"
      :changeqtysubsitem="changeqtysubsitem"
      :deleterp="deleterp"
      :selectsubsdate="selectsubsdate"
      :changehandler="changehandler"
      :changenotes="changenotes"
      :changedeliverytime="changedeliverytime"
      :changedeliverysingletime="changedeliverysingletime"
      :updatecache="updatecache"
    />
  </div>
</template>

<script>
import Mini from '@/components/Cart/Platforms/mini/index'
import Mobile from '@/components/Cart/Platforms/mobile/index'
import Desktop from '@/components/Cart/Platforms/desktop/index'

export default {
  components: {
    Mini,
    Mobile,
    Desktop
  },

  props: {
    subsorder: {
      type: Number,
      required: true
    },
    normalorder: {
      type: Number,
      required: true
    },
    expansion: {
      type: Array,
      required: true
    },
    expanddetail: {
      type: Function,
      required: true
    },
    changeqty: {
      type: Function,
      required: true
    },
    parsedate: {
      type: Function,
      required: true
    },
    parseprice: {
      type: Function,
      required: true
    },
    changeqtysubsitem: {
      type: Function,
      required: true
    },
    deleterp: {
      type: Function,
      required: true
    },
    selectsubsdate: {
      type: Function,
      required: true
    },
    changehandler: {
      type: Function,
      required: true
    },
    changenotes: {
      type: Function,
      required: true
    },
    changedeliverytime: {
      type: Function,
      required: true
    },
    changedeliverysingletime: {
      type: Function,
      required: true
    },
    updatecache: {
      type: Function,
      required: true
    },
  },

  computed: {
    screen () {
      return this.$store.state.screen
    }
  }
}
</script>
