// register the grid component
Vue.component('demo-grid', {
    template: '#grid-template',
    props: {
        heroes: Array,
        columns: Array,
        filterKey: String
    },
    data: function () {
        var sortOrders = {}
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    computed: {
        filteredHeroes: function () {
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var heroes = this.heroes
            if (filterKey) {
                heroes = heroes.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }
            if (sortKey) {
                heroes = heroes.slice().sort(function (a, b) {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return heroes
        }
    },
    filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
    }
})

// bootstrap the demo
var demo = new Vue({
    el: '#demo',
    data: {
        gridColumns: ['№', 'Name', 'E-mail', 'Age'],
        gridData: [
            { '№': '1', Name: 'Airi Satou', 'E-mail' : 'airi@company.com', Age: 33 },
            { '№': '2', Name: 'Angelica Ramos', 'E-mail' : 'angelica@company.com', Age: 43 },
            { '№': '3', Name: 'Ashton Cox', 'E-mail' : 'ashton@company.com', Age: 31 },
            { '№': '4', Name: 'Bradley Greer', 'E-mail' : 'bradley@company.com', Age: 28 }
        ]
    }
})