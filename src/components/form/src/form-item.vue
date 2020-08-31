<template>
  <div class="fy-form-item">
    <label v-if="label" :class="{ 'fy-form-item-label-required': isRequired }">{{ label }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="fy-form-item-message">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';
import Emitter from '@/mixins/emitter.js';
export default {
  name: 'fy-form-item',
  mixins: [ Emitter ],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isRequired: false,
      validateState: '',
      validateMessage: '',
      initialValue: '' // 存储初始值，重置使用
    }
  },
  computed: {
    fieldValue () {
      return this.form.model[this.prop];
    }
  },
  methods: {
    getRules () {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [...formRules];
    },
    getFilteredRule (trigger) {
      const rules = this.getRules();
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
    },
    validate (trigger, callback = function () {}) {
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) {
        return true;
      }

      this.validateState = 'validating';
      let descriptor = {};
      descriptor[this.prop] = rules;
      const validator = new AsyncValidator(descriptor);
      let model = {};
      model[this.prop] = this.fieldValue;
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';
        callback(this.validateMessage);
      })
    },
    onFieldChange () {
      this.validate('change');
    },
    onFieldBlur () {
      this.validate('blur');
    },
    setRules () {
      let rules = this.getRules();
      if (rules.length) {
        rules.every(rule => {
          this.isRequired = rule.required;
        })
      }
      this.$on('on-form-change', this.onFieldChange);
      this.$on('on-form-blur', this.onFieldBlur);
    },
    resetField () {
      this.validateState = '';
      this.validateMessage = '';
      this.form.model[this.prop] = this.initialValue;
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('fy-form', 'on-form-item-add', this);
      this.initialValue = this.fieldValue;
      this.setRules();
    }
  },
  beforeDestroy () {
    this.dispatch('fy-form', 'on-form-item-remove', this);
  }
}
</script>

<style>
.fy-form-item-label-required::before {
  content: '*';
  color: red;
}

.fy-form-item-message {
  color: red;
}
</style>