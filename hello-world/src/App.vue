<template>
  <div>
    <h2 v-once>v-once: {{ name }}</h2>
    <h2 v-pre>v-pre: {{ name }}</h2>
    <h2>Hello {{ name }}</h2>
    <button v-on:click="changeName('Batman', $event), getName($event)">
      Click Change Name
    </button>
    <button v-on:mouseover="changeName('Wonder woman', $event)">
      Hover Change Name
    </button>
  </div>
  <span>***************************************************************</span>
  <div class="conditional-rendering">
    <h2>{{ num }}</h2>
    <h2 v-if="num === 0">The number is zero</h2>
    <h2 v-else-if="num < 0">The number is negative</h2>
    <h2 v-else-if="num > 0">The number is positive</h2>
    <h2 v-else>Not a number</h2>
    <button @click="increment(1)">Increment 1</button>
    <button @click="increment(5)">Increment 5</button>
    <button @click="decrement(1)">Decrement 1</button>
    <button @click="decrement(5)">Decrement 5</button>
  </div>
  <span>***************************************************************</span>
  <div v-text="channel"></div>
  <div v-html="label"></div>
  <div v-html="hack"></div>
  <h2 v-bind:id="headingID">Heading</h2>
  <button v-bind:disabled="isDisabled">Bind</button>
  <h2 class="underline">Underline</h2>
  <h2 class="underline" v-bind:class="status">Status</h2>
  <h2 v-bind:class="isPromoted && 'promoted'">Promotedclick Movie</h2>
  <h2 v-bind:class="isSoldout ? 'sold-out' : 'new'">Soldout ? movie</h2>
  <h2 v-bind:class="['new', 'promoted']">Newly promoted movie</h2>
  <h2 v-bind:class="[isPromoted && 'promoted', isSoldout ? 'sold-out' : 'new']">
    Array conditional movie
  </h2>
  <h2
    v-bind:class="{
      promoted: isPromoted,
      new: !isSoldout,
      'sold-out': isSoldout,
    }"
  >
    Object conditional movie
  </h2>
  <h2
    v-bind:style="{
      color: highlightColor,
      'font-size': headerSize + 'px',
      padding: '20px',
    }"
  >
    Inline Style
  </h2>
  <h2 v-bind:style="headerStyleObject">Style Object</h2>

  <div v-bind:style="[baseStyleObject, successStyleObject]">Success Style</div>
  <div v-bind:style="[baseStyleObject, dangerStyleObject]">Danger Style</div>
  <span>***************************************************************</span>
  <template v-if="display">
    <h2>Nhan Phan</h2>
    <h2>Code Learning</h2>
    <h2>VueJS 3</h2>
  </template>
  <h2 v-show="showElement">Using v-show</h2>
  <h2 v-if="showElement">Using v-if</h2>

  <span>***************************************************************</span>
  <div>
    <h2 v-for="(student, index) in sutdents" :key="student">
      {{ index }}-{{ student }}
    </h2>
    <h2 v-for="(nameStudent, index) in fullNames" :key="index">
      {{ index }}-{{ nameStudent.firstName }} {{ nameStudent.lastName }}
    </h2>
  </div>
  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>
  <h2 v-for="(value, key, index) in myInfo" :key="value">
    {{ index }} {{ key }} {{ value }}
  </h2>
  <template v-for="name in sutdents" :key="name">
    <h2>{{ name }}</h2>
    <h5 v-if="name === 'Bruce'">VIP</h5>
    <input type="text" placeholder="Last name" />
    <hr />
  </template>
  <button @click="shuffle">Shuffle!</button>
  <div>
    <span>***************************************************************</span>
  </div>
  <div>
    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
  </div>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim.lazy="formValues.name" />
    </div>
    <div>
      <label for="profile">Profile Summary</label>
      <textarea id="profile" v-model.lazy="formValues.profileSummary" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="formValues.age" />
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Viet Nam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <label for="job-location">Job Location</label>
      <select id="job-location" multiple v-model="formValues.jobLocation">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Viet Nam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" />
      <label for="remoteWork">Open to remote work?</label>
    </div>
    <div>
      <input
        type="checkbox"
        id="workAtOffice"
        v-model="formValues.workAtOffice"
        true-value="yes"
        false-value="no"
      />
      <label for="workAtOffice">Work at office?</label>
    </div>

    <div>
      <label>Skill Set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label for="javascript">JavaScript</label>
    </div>

    <div>
      <label>Years of Experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearOfExperience"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.yearOfExperience"
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.yearOfExperience"
      />
      <label for="6-10">6-10</label>
      <input
        type="radio"
        id="10+"
        value="10+"
        v-model="formValues.yearOfExperience"
      />
      <label for="10+">10+</label>
    </div>
    <div>
      <label for="email">Email</label>
      <input
        @keyup.enter="submitForm"
        type="email"
        id="email"
        v-model.trim.lazy="formValues.email"
      />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>

  <span
    >***************************** Computed
    **********************************</span
  >
  <div>
    <div>
      <h2>Full Name: {{ firstName }} {{ lastName }}</h2>
      <h2>Computed fullName : {{ fullName }}</h2>
      <button @click="changeFullName">Change Fullname</button>
    </div>
    <button @click="items.push({ id: 4, title: 'Keyboard', price: 50 })">
      Add item
    </button>
    <h2>Computed total: {{ total }} (recommend)</h2>
    <h2>Method total: {{ getTotal() }} (should not be used)</h2>
  </div>
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 100">{{ item.title }} - {{ item.price }}</h2>
  </template>
  <h2 v-for="item in expensiveItems" :key="item.id">
    {{ item.title }} - {{ item.price }}
  </h2>

  <span
    >***************************** Watchers
    **********************************</span
  >
  <div>
    <h2>Volume Tracker (0-20)</h2>
    <h2>Current volume: {{ volume }}</h2>
    <div>
      <button @click="volume += 2">Increase</button>
      <button @click="volume -= 2">Decrease</button>
    </div>
  </div>
  <div>
    <input type="text" v-model="movie" />
    <input type="text" v-model="movieInfo.title" />
    <input type="text" v-model="movieInfo.actor" />
    <div>
      <button @click="movieList.push('Wonder Woman')">Add Movie</button>
    </div>
  </div>

  <span
    >***************************** Components
    **********************************</span
  >
  <Greet name="Brunce" heroName="Batman" />
  <Greet name="Clark" heroName="Superman" />
  <Greet name="Diana" heroName="Wonder Woman" />
  <Greet :name="name" :heroName="channel" />
  <Article
    id="my-article"
    title="Article Title"
    :likes="50"
    :isPublished="true"
  />

  <ComponentC />

  <div>
    <button @click="showPopup = true">Show Popup</button>
    <Popup v-show="showPopup" @close="closePopup" />
  </div>

  <div>
    <Input v-model="name" />
  </div>
  <span
    >*****************************Slots**********************************</span
  >
  <div>
    <Card></Card>
    <Card>Card content</Card>
    <Card><h2>Card content</h2></Card>
    <Card>
      <img src="https://picsum.photos/200" />
    </Card>
    <span>=========Named Slots========</span>
    <Card>
      <template v-slot:header>
        <h3>Header</h3>
      </template>
      <template v-slot:default>
        <img src="https://picsum.photos/200" />
      </template>
      <template v-slot:footer>
        <h3>Footer</h3>
        <button>View Details</button>
      </template>
    </Card>
  </div>
  <span>=========Slots Props========</span>
  <div>
    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.firstname }} {{ slotProps.lastname }}
      </template>
    </NameList>

    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.lastname }} {{ slotProps.firstname }}
      </template>
    </NameList>

    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.firstname }}
      </template>
    </NameList>
  </div>
</template>

<script>
import _ from "lodash";
import Greet from "./Components/Greet.vue";
import Article from "./Components/Article.vue";
import ComponentC from "./Components/ComponentC.vue";
import Popup from "./Components/Popup.vue";
import Input from "./Components/Input.vue";
import Card from "./Components/Card.vue";
import NameList from "./Components/NameList.vue";

export default {
  name: "App",
  components: {
    Greet,
    Article,
    ComponentC,
    Popup,
    Input,
    Card,
    NameList,
  },
  data() {
    return {
      name: "Zinzo Phan",
      channel: "Learning",
      label: "<b>Label HTML</b>",
      hack: `<a href='#' onclick="alert('You have been hacked!')">Win a prize!</a>`,
      headingID: "heading",
      isDisabled: true,
      status: "danger",
      isPromoted: true,
      isSoldout: false,
      highlightColor: "orange",
      headerSize: 50,
      headerStyleObject: {
        color: "orange",
        fontSize: "50px",
        padding: "20px",
      },
      baseStyleObject: {
        fontSize: "50px",
        padding: "20px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
      },
      dangerStyleObject: {
        color: "darkred",
        backgroundColor: "red",
        border: "1px solid darkred",
      },
      num: -3,
      display: true,
      showElement: false,
      sutdents: ["Bruce", "Clark", "Diana", "Barry"],
      fullNames: [
        { firstName: "Bruce", lastName: "Wayne" },
        { firstName: "Clark", lastName: "Kent" },
        { firstName: "Princess", lastName: "Diana" },
      ],
      actors: [
        { name: "Christian Bale", movies: ["Batman", "The Prestige"] },
        { name: "Di Caprio", movies: ["Titanic", "Inceptions"] },
      ],
      myInfo: {
        name: "Zinzo",
        channel: "Code learning",
        course: "Vue JS 3",
      },
      formValues: {
        name: "",
        profileSummary: "",
        age: null,
        country: "",
        jobLocation: [],
        remoteWork: false,
        workAtOffice: "no",
        skillSet: [],
        yearOfExperience: "",
        email: "",
      },
      firstName: "Nhan",
      lastName: "Phan",
      items: [
        { id: 1, title: "TV", price: 100 },
        { id: 2, title: "Phone", price: 200 },
        { id: 3, title: "Laptop", price: 300 },
      ],
      volume: 0,
      movie: "Test",
      movieInfo: {
        title: "",
        actor: "",
      },
      movieList: ["Batman", "Supperman"],
      showPopup: false,
    };
  },
  provide() {
    return {
      username: this.name,
    };
  },
  methods: {
    shuffle() {
      console.log(this.sutdents);
      this.sutdents = _.shuffle(this.sutdents);
    },
    changeName(name, event) {
      this.name = name;
      console.log("Event changeName ", event);
    },
    getName(event) {
      console.log("Event getName ", event);
    },
    increment(value) {
      this.num += value;
    },
    decrement(value) {
      this.num -= value;
    },
    submitForm() {
      console.log("submitForm ", this.formValues);
    },
    getTotal() {
      return this.items.reduce(
        (total, current) => (total = total + current.price),
        0
      );
    },
    changeFullName() {
      this.fullName = "Clark Kent";
    },
    closePopup(name) {
      this.showPopup = false;
      this.name = name;
      console.log(" closePopup ", name);
    },
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
    total() {
      return this.items.reduce(
        (total, current) => (total = total + current.price),
        0
      );
    },
    expensiveItems() {
      return this.items.filter((item) => item.price > 100);
    },
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue === 16) {
        alert(
          "listening to a high volume for a long time may damage your hearing"
        );
      }
    },
    movie: {
      handler(newValue) {
        console.log(`Calling API with movie name = ${newValue}`);
      },
      immediate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log(
          `Calling API with movie name = ${newValue.title} and actor = ${newValue.actor}`
        );
      },
      deep: true,
    },
    movieList: {
      handler(newValue) {
        console.log(`Calling API updated list ${newValue}`);
      },
      deep: true,
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
