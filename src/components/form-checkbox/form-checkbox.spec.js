import Input from './form-checkbox'
import { mount } from '@vue/test-utils'

describe('form-checkbox', async () => {
  /* Custom checkbox structure, class and attributes tests */

  it('default has structure <div><input/><label></label></div>', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper).toBeDefined()
    expect(wrapper.is('div')).toBe(true)
    const children = wrapper.element.children
    expect(children.length).toEqual(2)
    expect(children[0].tagName).toEqual('INPUT')
    expect(children[1].tagName).toEqual('LABEL')
  })

  it('default has wrapper class custom-control and custom-checkbox', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper.classes().length).toEqual(2)
    expect(wrapper.classes()).toContain('custom-control')
    expect(wrapper.classes()).toContain('custom-checkbox')
  })

  it('default has input type checkbox', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBeDefined()
    expect(input.attributes('type')).toEqual('checkbox')
  })

  it('default has input class custom-control-input', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.classes().length).toEqual(1)
    expect(input.classes()).toContain('custom-control-input')
  })

  it('default has label class custom-control-label', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('label')
    expect(input.classes().length).toEqual(1)
    expect(input.classes()).toContain('custom-control-label')
  })

  it('default has default slot content in label', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const label = wrapper.find('label')
    expect(label.text()).toEqual('foobar')
  })

  it('default has no disabled attribute on input', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('disabled')).not.toBeDefined()
  })

  it('default has disabled attribute on input when prop disabled set', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false,
        disabled: true
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBeDefined()
  })

  it('default has no required attribute on input', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('required')).not.toBeDefined()
  })

  it('default does not have required attribute on input when prop required set and name prop not provided', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false,
        required: true
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('required')).not.toBeDefined()
  })

  it('default has no name attribute on input', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('name')).not.toBeDefined()
  })

  it('default has name attribute on input when name prop set', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false,
        name: 'test'
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('name')).toBeDefined()
    expect(input.attributes('name')).toEqual('test')
  })

  it('default has required attribute on input when prop required set and prop name set', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false,
        required: true,
        name: 'test'
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('required')).toBeDefined()
  })

  it('default has no form attribute on input', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('form')).not.toBeDefined()
  })

  it('default has form attribute on input when form prop set', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false,
        form: 'test'
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('form')).toBeDefined()
    expect(input.attributes('form')).toEqual('test')
  })

  it('default has default slot content in label', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const label = wrapper.find('label')
    expect(label.text()).toEqual('foobar')
  })

  it('default has class custom-control-inline when prop inline=true', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false,
        inline: true
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper.classes().length).toEqual(3)
    expect(wrapper.classes()).toContain('custom-checkbox')
    expect(wrapper.classes()).toContain('custom-control')
    expect(wrapper.classes()).toContain('custom-control-inline')
  })

  it('default has no input validation classes by default', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')
  })

  it('default has no input validation classes when state=null', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: null,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')
  })

  it('default has input validation class is-valid when state=true', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).toContain('is-valid')
  })

  it('default has input validation class is-valid when state="valid"', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: 'valid',
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).toContain('is-valid')
  })

  it('default has input validation class is-invalid when state=false', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: false,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')
  })

  it('default has input validation class is-invalid when state="invalid"', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: 'invalid',
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')
  })

  /* plain styling */

  it('plain has structure <div><input/><label></label></div>', async () => {
    const wrapper = mount(Input, {
      propsData: {
        plain: true,
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper).toBeDefined()
    expect(wrapper.is('div')).toBe(true)
    const children = wrapper.element.children
    expect(children.length).toEqual(2)
    expect(children[0].tagName).toEqual('INPUT')
    expect(children[1].tagName).toEqual('LABEL')
  })

  it('plain has wrapper class form-check', async () => {
    const wrapper = mount(Input, {
      propsData: {
        plain: true,
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper.classes().length).toEqual(1)
    expect(wrapper.classes()).toContain('form-check')
  })

  it('plain has input type checkbox', async () => {
    const wrapper = mount(Input, {
      propsData: {
        plain: true,
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBeDefined()
    expect(input.attributes('type')).toEqual('checkbox')
  })

  it('plain has input class form-check-input', async () => {
    const wrapper = mount(Input, {
      propsData: {
        plain: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input.classes().length).toEqual(1)
    expect(input.classes()).toContain('form-check-input')
  })

  it('plain has label class form-check-label', async () => {
    const wrapper = mount(Input, {
      propsData: {
        plain: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('label')
    expect(input.classes().length).toEqual(1)
    expect(input.classes()).toContain('form-check-label')
  })

  it('plain has default slot content in label', async () => {
    const wrapper = mount(Input, {
      propsData: {
        plain: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const label = wrapper.find('label')
    expect(label.text()).toEqual('foobar')
  })

  it('plain has no input validation classes by default', async () => {
    const wrapper = mount(Input, {
      propsData: {
        plain: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')
  })

  it('plain has no input validation classes when state=null', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: null,
        plain: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')
  })

  it('plain has input validation class is-valid when state=true', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: true,
        plain: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).toContain('is-valid')
  })

  it('plain has input validation class is-valid when state="valid"', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: 'valid',
        plain: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).toContain('is-valid')
  })

  it('plain has input validation class is-invalid when state=false', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: false,
        plain: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')
  })

  it('plain has input validation class is-invalid when state="invalid"', async () => {
    const wrapper = mount(Input, {
      propsData: {
        state: 'invalid',
        plain: true,
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')
  })

  /* button styling - stand-alone mode */

  it('stand-alone button has structure <div><label><input/></label></div>', async () => {
    const wrapper = mount(Input, {
      propsData: {
        button: true,
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper).toBeDefined()
    expect(wrapper.is('div')).toBe(true)
    const label = wrapper.element.children
    expect(label.length).toEqual(1)
    expect(label[0].tagName).toEqual('LABEL')
    const input = label[0].children
    expect(input.length).toEqual(1)
    expect(input[0].tagName).toEqual('INPUT')
  })

  it('stand-alone button has wrapper classes btn-group-toggle and d-inline-block', async () => {
    const wrapper = mount(Input, {
      propsData: {
        button: true,
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper.classes().length).toEqual(2)
    expect(wrapper.classes()).toContain('btn-group-toggle')
    expect(wrapper.classes()).toContain('d-inline-block')
  })

  it('stand-alone button has label classes btn and btn-secondary when uchecked', async () => {
    const wrapper = mount(Input, {
      propsData: {
        button: true,
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    expect(label.classes().length).toEqual(2)
    expect(label.classes()).not.toContain('active')
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')
  })

  it('stand-alone button has label classes btn, btn-secondary and active when checked by default', async () => {
    const wrapper = mount(Input, {
      propsData: {
        button: true,
        checked: 'a',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    expect(label.classes().length).toEqual(3)
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')
    expect(label.classes()).toContain('active')
  })

  it('stand-alone button has label class active when clicked (checked)', async () => {
    const wrapper = mount(Input, {
      propsData: {
        button: true,
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(label.classes().length).toEqual(2)
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).not.toContain('active')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')
    input.setChecked(true)
    expect(label.classes().length).toEqual(3)
    expect(label.classes()).toContain('active')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')
  })

  it('stand-alone button has label class focus when input focused', async () => {
    const wrapper = mount(Input, {
      propsData: {
        button: true,
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    const input = wrapper.find('input')
    expect(label.classes().length).toEqual(2)
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).not.toContain('active')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')
    expect(input).toBeDefined()
    input.trigger('focus')
    expect(label.classes().length).toEqual(3)
    expect(label.classes()).toContain('focus')
  })

  it('stand-alone button has label btn-primary when prop btn-variant set to primary', async () => {
    const wrapper = mount(Input, {
      propsData: {
        button: true,
        buttonVariant: 'primary',
        checked: '',
        value: 'a'
      },
      slots: {
        default: 'foobar'
      }
    })
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    expect(label.classes().length).toEqual(2)
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).not.toContain('active')
    expect(label.classes()).not.toContain('btn-secondary')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-primary')
  })

  /* functionality testing */

  it('derfault has internal localChecked=false when prop checked=false', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: false
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toEqual(false)
  })

  it('derfault has internal localChecked=true when prop checked=true', async () => {
    const wrapper = mount(Input, {
      propsData: {
        checked: true
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toEqual(true)
  })

  it('derfault has internal localChecked set to uncheckedValue', async () => {
    const wrapper = mount(Input, {
      propsData: {
        uncheckedValue: 'foo',
        value: 'bar'
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toEqual('foo')
  })

  it('derfault has internal localChecked set to value when checked=value', async () => {
    const wrapper = mount(Input, {
      propsData: {
        uncheckedValue: 'foo',
        value: 'bar',
        checked: 'bar'
      },
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toEqual('bar')
  })
})
