import type { ProfileOption } from '../types/profile';

export const profileOptions: ProfileOption[] = [
  { id: 'responsavel', label: 'Responsável', isAvailable: true },
  { id: 'instituicao', label: 'Instituição', isAvailable: false },
  { id: 'professor', label: 'Professor', isAvailable: false },
  { id: 'administrativo', label: 'Administrativo', isAvailable: false },
];
