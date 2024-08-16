type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export class PostsProvider {
  private LIMIT = 20;
  private store: Ref<TPost[]> = ref([]);
  private loaded = false;
  totalPages = ref(0);
  loading: Ref<boolean> = ref(false);
  options: Ref<{ page: number }> = ref({
    page: 1,
  });
  error: any;

  data = computed({
    get: (): TPost[] => {
      if (!this.loaded) {
        this.loaded = true;
        this.get();
      }
      return this.store.value;
    },
    set: (v: TPost[]): void => {
      this.store.value = v;
    },
  });

  constructor() {
    watch(
      this.options,
      async () => {
        await this.get();
      },
      { deep: true }
    );
  }

  private async get() {
    if (this.options.value === null) return;
    const { page } = this.options.value;
    this.loading.value = true;
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${
          (page - 1) * this.LIMIT
        }&_limit=${this.LIMIT}`
      );
      this.store.value = await response.json();
    } catch (err) {
      this.error.value = err;
    }
    this.loading.value = false;
  }

  // async add(request: TPatientAddRequest): Promise<TEntityPatient> {
  //   this.loading.value = true;
  //   useGlobalLoader().set(true);
  //   const result = await usePatientService().add(request);
  //   this.store.value.unshift(result);
  //   this.loading.value = false;
  //   useGlobalLoader().set(false);
  //   return result;
  // }
}
