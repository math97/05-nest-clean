export class Slug {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  static create(slug: string) {
    return new Slug(slug)
  }

  /**
   * Receives a string and normalize it as a slug.
   *
   * Example: "An example title" => "an-example-title"
   *
   * @param text {string}
   */
  static createFromText(text: string): Slug {
    const slugText = text
      .normalize('NFKD') // Normalize unicode characters removing caracteres especiais
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, '') // Remove all non-word characters
      .replace(/_/g, '-') // Replace underscores with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
      .replace(/-$/g, '') // Remove hyphens from the end

    return new Slug(slugText)
  }
}
