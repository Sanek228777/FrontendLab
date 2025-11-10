import { TruncateDescriptionPipe } from './truncate-description.pipe';

describe('TruncateDescriptionPipe', () => {
  let pipe: TruncateDescriptionPipe;

  beforeEach(() => {
    pipe = new TruncateDescriptionPipe();
  });

  it('повинен створитись', () => {
    expect(pipe).toBeTruthy();
  });

  it('повинен обрізати текст довший за ліміт і додавати "..."', () => {
    const text = 'Це дуже довгий опис, який точно перевищує ліміт символів.';
    const result = pipe.transform(text, 20);
    expect(result.endsWith('...')).toBeTrue();
    expect(result.length).toBeLessThanOrEqual(23);
  });

  it('повинен повертати оригінальний текст, якщо він коротший за ліміт', () => {
    const text = 'Короткий опис';
    const result = pipe.transform(text, 50);
    expect(result).toBe(text);
  });

  it('повинен повертати порожній рядок, якщо значення не задано', () => {
    const result = pipe.transform('', 30);
    expect(result).toBe('');
  });
});
