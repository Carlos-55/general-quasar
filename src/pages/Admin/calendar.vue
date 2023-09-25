<template>
<div class="row items-center" >
    <div class="full-width full-height">
      <div class="row justify-center items-center">
        <q-btn rounded dense label="Anterior" color="primary" flat  no-caps @click="calendarPrev" />
        <q-separator vertical />
        <q-btn rounded dense label="Siguiente" color="primary"  flat no-caps @click="calendarNext" />
      </div>
      <q-separator />
      <div style="max-width: 100%; width: 100%;" class="borders">
        <q-calendar
          v-model="selectedDate"
          view="month"
          locale="es"
          :day-height="68"
          @input="onModelChanged"
          @click:day2="onClickDay2"
        >
            <template #day="{ timestamp }">
              {{timestamp.date}}
              <template v-for="(event, index) in getEvents(timestamp.date)">
                <q-badge
                  :key="index"
                  style="width: 100%; cursor: pointer; height: 16px; max-height: 16px"
                  class="left-side"
                  :color="(event.bgcolor) ? event.bgcolor : 'orange-10'"
                  @click="getDates(event)"
                >
                  <q-icon v-if="event.icon" :name="event.icon" class="q-mr-xs"></q-icon><span class="ellipsis">{{ event.title }}</span>
                </q-badge>
              </template>
            </template>
        </q-calendar>
      </div>
    </div>
    <FormAgenda v-model="dialog" id="formm"/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {  QCalendar  } from '@quasar/quasar-ui-qcalendar';
import FormAgenda from '../../components/Admin/FormAgenda.vue';
import * as moment from "moment";
@Component({
  components: {
    FormAgenda
  }
})
export default class Index extends Vue {
    selectedDate: any = '';
     events =[  
       {
          title: '1st of the Month',
          details: 'Everything is funny as long as it is happening to someone else',
          date: this.getCurrentDay(1),
          bgcolor: 'orange'
        },
        {
          title: 'Sisters Birthday',
          details: 'Buy a nice present',
          date: this.getCurrentDay(2),
          // bgcolor: 'green',
          icon: 'fas fa-birthday-cake'
        },
        {
          title: 'Meeting',
          details: 'Time to pitch my idea to the company',
          date: this.getCurrentDay(8),
          time: '10:00',
          duration: 120,
          bgcolor: 'red',
          icon: 'fas fa-handshake'
        },
        {
          title: 'Lunch',
          details: 'Company is paying!',
          date: this.getCurrentDay(10),
          time: '11:30',
          duration: 90,
          bgcolor: 'teal',
          icon: 'fas fa-hamburger'
        },
        {
          title: 'Visit mom',
          details: 'Always a nice chat with mom',
          date: this.getCurrentDay(12),
          time: '17:00',
          duration: 90,
          bgcolor: 'blue-grey',
          icon: 'fas fa-car'
        },
        {
          title: 'Conference',
          details: 'Teaching Javascript 101',
          date: this.getCurrentDay(16),
          time: '08:00',
          duration: 540,
          bgcolor: 'blue',
          icon: 'people'
        },
        {
          bgcolor: "purple",
          date: this.getCurrentDay(18),
          days: 7,
          details: "Trails and hikes, going camping! Don't forget to bring bear spray!",
          icon: "fas fa-plane",
          side: undefined,
          title: "Vacation",
        },
        {
          title: 'Rowing',
          details: 'Time for some weekend R&R',
          date:this.getCurrentDay(20),
          bgcolor: 'purple',
          icon: 'rowing',
          days: 2,
          side: ''
        },
        {
          title: 'Vacation',
          details: 'Trails and hikes, going camping! Don\'t forget to bring bear spray!',
          date: this.getCurrentDay(21),
          bgcolor: 'purple',
          icon: 'fas fa-plane',
          days: 7
        }
      ];
    dateDialog: string = '';
    basic: boolean = false;
    dialog: boolean = false;
    datesOfConsultation: any = {};
    reRGBA = /^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/;
    
    async mounted(){
        var myobj: any = document.getElementById('formm');
        myobj.remove();
    }

    getCurrentDay (day:any) {
      const newDay = new Date(moment().format())
      newDay.setDate(day)
      const tm = moment(newDay).format('YYYY-MM-DD');
      return tm
    }


    getEvents(date: any){
      const currendDate = moment(date).format('YYYY-MM-DD');
      const dateOfEvents: any = [];
      for (let position = 0; position < this.events.length; position++) {
        let added = false;
        const element = this.events[position];
        if (element.date == date ) {
          // if (element.time) {
            // if (dateOfEvents.length > 0) {
              // const startTime = moment(element.date).format('YYYY-MM-DD');
              // const endTime = moment(startTime).add(element.duration);
              // for (let j = 0; j < dateOfEvents.length; j++) {
              //   const elementTwo = dateOfEvents[j];

                // if (elementTwo.time) {
                  //  const startTimeTwo = moment(elementTwo.date).format('YYYY-MM-DD');
                  //  const endTimeTwo = moment(startTimeTwo).add(elementTwo.duration);
                  //  if (moment(startTime).isBetween(startTimeTwo, endTimeTwo) || moment(endTime).isBetween(startTimeTwo, endTimeTwo) ) {
                    //  elementTwo.side = 'left';
                     this.events[position].side = 'right';
                     dateOfEvents.push(this.events[position]);
                     added = true;
                     break;
                  //  }
                // }
              }
            // }
          // }
          // if (!added) {
          //   this.events[position].side = undefined
          //   dateOfEvents.push(this.events[position])
          // }else if (element.days) {
          //     // check for overlapping dates
          //   const startTime = moment(element.date).format();
          //   const endTime = moment(startTime, 'YYYY-MM-DD').add(element.days);
          //     if (moment(currendDate).isBetween(startTime, endTime) ) {
          //       dateOfEvents.push(this.events[position])
          //       added = true
          //     }
          //   }
          }
          return dateOfEvents
        // } 
    }

    getDates(dates: any){
     this.datesOfConsultation = dates;
    }


    calendarNext () {
        //@ts-ignore
      this.$refs.calendar.next()
    }
    calendarPrev () {
        //@ts-ignore
      this.$refs.calendar.prev()
    }
    onModelChanged (data:any) {
    //   this.events.unshift(`Modelo cargado => ${JSON.stringify(data)}`)
      this.dateDialog = `Modelo cargado => ${JSON.stringify(data)} ${JSON.stringify(this.datesOfConsultation)}`;
      this.dialog = true;
    }
    onClickDay2 (data:any) {
    //   this.events.unshift(`Cuadro seleccionado => ${JSON.stringify(data.scope.timestamp.date)}`)
      this.dateDialog = `Cuadro seleccionado => ${JSON.stringify(data.scope.timestamp.date)} ${JSON.stringify(this.datesOfConsultation)}`;
      this.dialog = true;
    }


}
</script>
<style lang="sass" scoped>
.my-text-caption
  font-size: 0.7rem
  font-weight: 400
  line-height: .75rem !important
  letter-spacing: 0.03333em

.borders
  padding: 1.5%
  width: 100%
  margin: 0 auto
  display: block
  border: 1px solid #d9d9d9
</style>