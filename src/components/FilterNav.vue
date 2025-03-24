<template>
    <div>
    <label>
        <input type="checkbox" value="true" @cahnge="updateSelected('true')" />
        Disponible
    </label>
    <label>
        <input type="checkbox" value="false" @change="updateSelected('false')" />
        Emprunté
    </label>
    </div>
    <div>
        <input type="text" v-model="search" placeholder="Rechrcher par livre ou par auteur" @input="FilterBooks"/>
    </div>
</template>
<script>


export default({
    props: {
        Selected: {
            type: Array,
            required: true
        }
    },
    methods: {
        updateSelected(newValue) {
            this.$emit('update-selected', newValue);
        }
    },
    watch: {
        Selected: {
            handler(newValue) {
                this.updateSelected(newValue);
            },
            deep: true
        }
    },
    Filterjobs() {
            const filtered = this.search
                ? this.books.filter(book =>
                    book.title.toLowerCase().includes(this.search.toLowerCase())|| book.author.toLowerCase().includes(this.search.toLowerCase()))
                : this.books;
            this.$emit('filter-jobs', filtered); // Emit filtered jobs to parent
        }
    
})
</script>
