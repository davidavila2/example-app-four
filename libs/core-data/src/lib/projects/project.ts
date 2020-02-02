export interface Project {
  id: number,
  title: string,
  details: string
}

export const emptyProject: Project = {
  id: null,
  title: '',
  details: ''
}
