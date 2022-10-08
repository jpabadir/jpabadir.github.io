import { formCode } from './convert-kit-form';

export default function Newsletter() {
  return <div dangerouslySetInnerHTML={{ __html: formCode }} />;
}
