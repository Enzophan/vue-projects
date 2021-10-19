import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import store from '@/store'

@Module({ namespaced: true, store })
class User extends VuexModule {
    public name = "Test";

    @Mutation
    public changeName(newName: string): void {
        this.name = newName
    }

    get nameUpperCase(): string {
        return this.name.toUpperCase()
    }

    @Action
    public updateName(newName: string): void {
        this.context.commit("changeName", newName)
    }

}
export default User;
