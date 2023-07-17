import {makeAutoObservable} from "mobx";

export default class PackageStore {
    constructor() {
        this._packages = []
        this._selectedPack = {}
        this._selectedPackId = {}
        this._selectedPackName = {}
        this._selectedPackBudget = {}
        this._selectedPackTotalTime = {}
    }

    setPackages(packages) {
        this._packages = packages
    }
    setSelectedPack(pack) {
        this._selectedPack = pack
    }
    setSelectedPackId(id) {
        this._selectedPackId = id
    }
    setSelectedPackName(name) {
        this._selectedPackName = name
    }
    setSelectedPackBudget(budget) {
        this._selectedPackBudget = budget
    }
    setSelectedPackTotalTime(totalTime) {
        this._selectedPackTotalTime = totalTime
    }

    get packages() {
        return this._packages
    }
    get selectedPack() {
        return this._selectedPack
    }
    get selectedPackId() {
        return this._selectedPackId
    }
    get selectedPackName() {
        return this._selectedPackName
    }
    get selectedPackBudget() {
        return this._selectedPackBudget
    }
    get selectedPackTotalTime() {
        return this._selectedPackTotalTime
    }
}
