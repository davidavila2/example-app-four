export interface Project {
  id: number,
  title: string,
  details: string,
  coolLevel: number,
  approved: boolean
}

export const emptyProject: Project = {
  id: null,
  title: '',
  details: '',
  coolLevel: 0,
  approved: false
}
