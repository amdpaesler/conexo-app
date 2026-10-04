export type UserProfile = 'responsavel' | 'instituicao' | 'professor' | 'administrativo';

export type ProfileOption = {
  id: UserProfile;
  label: string;
  isAvailable: boolean;
};
