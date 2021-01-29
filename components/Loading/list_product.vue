<template>
  <div>
    <v-row no-gutters>
      <v-col v-for="item in 6" :key="item" cols="6">
        <v-card class="ma-1 mt-5 mb-0" outlined>
          <div>
            <div
              class="lz-load"
              style="width: 100%; height: 180px; border-radius: 5px 5px 0 0"
            >
              &nbsp;
            </div>
          </div>

          <div class="pa-2">
            <div
              class="pt-2"
              style="
                font-size: 14px;
                display: inline-block;
                min-width: 150px;
                white-space: nowrap;
                overflow: hidden !important;
                text-overflow: ellipsis;
              "
            >
              <div
                class="lz-load"
                style="width: 100%; height: 18px"
              >
                &nbsp;
              </div>
            </div>
            <div
              style="font-size: 12px; font-weight: 600; width: 105px;"
            >
              <div
                class="lz-load"
                style="width: 100%; height: 18px"
              >
                &nbsp;
              </div>
            </div>
            <div class="d-flex flex-row pt-3">
              <div
                class="lz-load"
                style="width: 48%; height: 27px; border-radius: 4px"
              >
                &nbsp;
              </div>
              <v-spacer />
              <div
                class="lz-load"
                style="width: 48%; height: 27px; border-radius: 4px"
              >
                &nbsp;
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
