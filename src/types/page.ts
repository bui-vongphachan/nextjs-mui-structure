export interface ServerPageProps<T> {
  params: { [key: string]: string };
  searchParams: T;
}

export interface DefaultPageProps {
  message?: string;
}
