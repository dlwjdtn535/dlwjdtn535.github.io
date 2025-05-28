// 폼 관련 타입들
export interface ContactFormData {
  name: string;
  email: string;
  projectType: ProjectType;
  budget: BudgetRange;
  message: string;
}

export interface FormStatus {
  loading: boolean;
  success: boolean;
  error: boolean;
}

export type ProjectType =
  | '웹사이트 개발'
  | '웹 애플리케이션'
  | '모바일 앱'
  | 'API 개발'
  | '기타';

export type BudgetRange =
  | '100만원 미만'
  | '100-300만원'
  | '300-500만원'
  | '500만원 이상'
  | '협의 후 결정';

// 포트폴리오 관련 타입들
export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  tech: string[];
  description: string;
  duration: string;
  features: string[];
}

export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'blockchain';

export interface CategoryFilter {
  id: string;
  name: string;
  count: number;
}

// 컴포넌트 Props 타입들
export interface ContactFormProps {
  className?: string;
  onSubmitSuccess?: () => void;
  onSubmitError?: (error: Error) => void;
}

export interface PortfolioGalleryProps {
  className?: string;
  initialCategory?: string;
  projects?: Project[];
}

// API 응답 타입들
export interface FormspreeResponse {
  ok: boolean;
  next?: string;
  errors?: Array<{
    field: string;
    code: string;
    message: string;
  }>;
}

// 유틸리티 타입들
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// 이벤트 핸들러 타입들
export type FormChangeHandler = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => void;
export type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;
export type ButtonClickHandler = (
  e: React.MouseEvent<HTMLButtonElement>
) => void;
