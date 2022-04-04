![logo](https://realhe.ro/img/logo.svg "Realhe.ro")

# dirtemplate

Simple tool for building reusable, standardized directory structures. 

## Usage:

```
dirtemplate [options] <dirname>
```

* `dirname` — a name of a root directory where the folder structure will be created
* `template` — name (or path) to determine the template

## Examples

```bash
npx @fedek6/dirtemplate new-project --template multimedia
```

Will create a directory structure determined in a built-in template called `multimedia.json`. 

---

If you want, you can use your own custom template. Simply use the path instead of a template name. 

```bash
npx @fedek6/dirtemplate new-project --template ./custom.json
```

## Multimedia template

Multimedia template consists of directories:

* 3D-models
* brushes
* fonts
* inspirations
* palettes
* photos
* production
* snippets
* textures
* vectors
* videos

As you can see this is pretty good boilerplate for any website or game project.

## Simple website template

This is template for starting simple webistes:

* content
* docs
* snippets
* production
* fonts

## How to add custom template?

Templates are simply `json` files:

```json
{
  "directory-1": "# Markdown description",
  "directory-2": "# Markdown description"
}

```