import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import store from '@/store';
import axios from 'axios';

@Module({ namespaced: true, store })
class Random extends VuexModule {
    public number = 0;
    public history = [0];

    @Mutation
    public addToCounter(newNumber: number): void {
        this.number = this.number + newNumber;
        this.history.push(this.number);
    }

    @Mutation
    public subtractFromCounter(newNumber: number): void {
        this.number = this.number - newNumber;
        this.history.push(this.number);
    }

    get activeIndexes() {
        return (value: number): number[] => {
            const indexes: number[] = [];
            this.history.forEach((number, index) => {
                if (number === value) {
                    indexes.push(index)
                }
            });
            return indexes;
        }
    }


    @Action
    public updateNumber(newNumber: number): void {
        this.context.commit("addToCounter", newNumber)
    }

    @Action
    public subNumber(newNumber: number): void {
        this.context.commit("subtractFromCounter", newNumber)
    }

    @Action
    public async addRandomNumber(): Promise<void> {
        const data = await axios.get("https://www.random.org/integers/?num=1&min=100&max=1000&col=1&base=10&format=plain&rnd=new");
        console.log("data ", data)
        this.context.commit("addToCounter", data.data)
    }


}
export default Random;
